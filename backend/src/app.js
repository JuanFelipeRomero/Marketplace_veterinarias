const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

// Habilitar cors para TODAS las solicitudes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Configurar express-session para manejar sesiones de usuario
app.use(
  session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true,
  })
);

// Configurar Handlebars como motor de plantillas
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Ruta para registrar un cliente ************************************************************
app.post('/register/user', async (req, res) => {
  console.log('Iniciando registro de usuario...');

  const {
    nombre,
    email,
    telefono,
    contrasena,
    nombremascota,
    edad,
    especie,
    raza,
  } = req.body;

  try {
    console.log('Datos recibidos:', req.body);

    // Generar salto para hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    // Obtener la fecha y hora actual para la fecha de registro
    const fecha_registro = new Date();

    // Iniciar transacción
    await pool.query('BEGIN');

    // Registrar el usuario
    const usuarioQuery = `
      INSERT INTO "USUARIOS" (nombre, correo, contrasena, telefono, fecha_registro) 
      VALUES ($1, $2, $3, $4, $5) RETURNING id_usuario`;

    const result = await pool.query(usuarioQuery, [
      nombre,
      email,
      hashedPassword,
      telefono,
      fecha_registro,
    ]);

    const id_usuario = result.rows[0].id_usuario;
    console.log('Usuario registrado exitosamente con ID:', id_usuario);

    // Registrar la mascota
    const mascotaQuery = `
      INSERT INTO "MASCOTAS" (nombre, edad, especie, raza, id_usuario)
      VALUES ($1, $2, $3, $4, $5)`;

    await pool.query(mascotaQuery, [
      nombremascota,
      edad,
      especie,
      raza,
      id_usuario,
    ]);

    console.log('Mascota registrada exitosamente');

    // Confirmar transacción
    await pool.query('COMMIT');
    res
      .status(201)
      .json({ message: 'Usuario y mascota registrados exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario y mascota:', error);

    // Intentar hacer rollback, sin detener el proceso si falla
    try {
      await pool.query('ROLLBACK');
    } catch (rollbackError) {
      console.error('Error al hacer ROLLBACK:', rollbackError);
    }

    res.status(500).json({ message: 'Error al registrar usuario y mascota' });
  }
});

// Ruta para iniciar sesion ***********************************************************
app.post('/login', async (req, res) => {
  const { email, contrasena } = req.body;
  console.log('Datos recibidos en el backend:', req.body);

  try {
    // Asegúrate de que los valores recibidos no sean undefined
    console.log('Correo recibido:', email);
    console.log('Contraseña recibida:', contrasena);

    // Buscar usuario por el email, utilizando "$1" para parametrizar la consulta
    const usuarioQuery = 'SELECT * FROM "USUARIOS" WHERE correo = $1';
    const usuarioResult = await pool.query(usuarioQuery, [email]);

    if (usuarioResult.rows.length === 0) {
      return res.status(400).send('Correo o contraseña incorrectos');
    }

    // Información del usuario obtenida
    const usuario = usuarioResult.rows[0];

    // Asegúrate de que el hash de la contraseña no sea undefined
    console.log('Contraseña hasheada en la base de datos:', usuario.contrasena);

    if (!usuario.contrasena) {
      return res
        .status(500)
        .send('Contraseña no encontrada en la base de datos');
    }

    // Verificar la contraseña ingresada por el usuario
    const contrasenaValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena
    );

    if (!contrasenaValida) {
      return res.status(400).send('Correo o contraseña incorrectos');
    }

    // Generar el token JWT si las credenciales son válidas
    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
      },
      process.env.JWT_SECRET, // La clave secreta para firmar el token
      { expiresIn: '1h' } // Nota: corregido `expires` a `expiresIn`
    );

    // Enviar el token y algunos datos básicos del usuario
    res.json({
      token,
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error en el servidor al intentar iniciar sesión');
  }
});

app.get('/users', async (req, res) => {
  try {
    const usuariosQuery = 'SELECT * FROM "USUARIOS"';
    const result = await pool.query(usuariosQuery);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los datos de los usuarios:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener los datos de los usuarios' });
  }
});

app.get('/pets', async (req, res) => {
  try {
    const mascotasQuery = 'SELECT * FROM "MASCOTAS"';
    const result = await pool.query(mascotasQuery);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los datos de las mascotas:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener los datos de las mascotas' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
