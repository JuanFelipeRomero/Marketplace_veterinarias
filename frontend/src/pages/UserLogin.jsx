import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Input, Stack, Heading } from '@chakra-ui/react';
import { Field } from '../components/ui/field'; // Asegúrate de tener un componente `Field` reutilizable
import { useNavigate } from 'react-router';
import useAuthStore from '../stores/useAuthStore';

// Schema de validación para el formulario de inicio de sesión
const loginSchema = z.object({
  email: z.string().email('Por favor ingresa un email válido'),
  contrasena: z.string().min(1, 'La contraseña es obligatoria'),
});

const apiUrl = import.meta.env.VITE_API_URL;

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      contrasena: '',
    },
  });

  const onSubmit = async (credentials) => {
    console.log('Datos enviados:', credentials);
    // Lógica de inicio de sesión aquí

    try {
      console.log('Credenciales ingresadas:', credentials); // Verificar los valores que estamos enviando
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const { user, token } = await response.json();

        // Guardar token y usuario en localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Actualizar el estado de autenticación global
        console.log('Sesión iniciada correctamente');
        login(user, token);

        //navegar al "homepage"
        navigate('/home-page-Dueno');
      } else {
        console.error('Error al iniciar sesión: ', response.statusText);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  return (
    <main className="h-screen w-full flex login-bg">
      <section className="w-1/2 flex justify-center items-center p-8">
        <Box
          width="100%"
          maxWidth="400px"
          p={8}
          boxShadow="lg"
          borderRadius="md"
          bg="white"
        >
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Iniciar Sesión
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={4} align="flex-start" maxW="sm">
              <Field
                label="Email"
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  {...register('email', {
                    required: 'El email es obligatorio',
                  })}
                  placeholder="example@example.com"
                  type="email"
                />
              </Field>

              <Field
                label="Contraseña"
                invalid={!!errors.contrasena}
                errorText={errors.contrasena?.message}
              >
                <Input
                  {...register('contrasena', {
                    required: 'La contraseña es obligatoria',
                  })}
                  placeholder="****"
                  type="password"
                />
              </Field>

              <Button
                className="mx-auto block text-white"
                type="submit"
                size="sm"
                variant="solid"
                bg="#38A169"
                px="20"
                py="1"
              >
                Iniciar Sesión
              </Button>
            </Stack>
          </form>
        </Box>
      </section>
      <section className="w-1/2 flex justify-center flex-col items-center registeruser-bg"></section>
    </main>
  );
}
