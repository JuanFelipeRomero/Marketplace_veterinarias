import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, Stack, Heading } from '@chakra-ui/react';
import { Field } from '../components/ui/field'; // Asegúrate de tener un componente `Field` reutilizable
import { ReturnBtn } from '../ownComponents/ReturnBtn';

// Schema del formulario para el registro de mascota
const petSchema = z.object({
  nombremascota: z.string().min(1, 'El nombre de la mascota es obligatorio'),
  edad: z.string().min(1, 'La edad es obligatoria'),
  especie: z.string().min(1, 'La especie es obligatoria'),
  raza: z.string().min(1, 'La raza es obligatoria'),
});

const apiUrl = import.meta.env.VITE_API_URL;

export default function PetRegister() {
  const [fetchError, setFecthError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(petSchema),
    defaultValues: {
      nombremascota: '',
      edad: '',
      especie: '',
      raza: '',
    },
  });

  const onSubmit = async (data) => {
    console.log('Datos de la mascota enviados: ', data);

    //Recuperar informacion personal
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));

    const fullData = {
      nombre: personalInfo.nombre,
      email: personalInfo.email,
      telefono: personalInfo.telefono,
      contrasena: personalInfo.contrasena,
      nombremascota: data.nombremascota,
      edad: data.edad,
      especie: data.especie,
      raza: data.raza,
    };

    console.log('Full info: ' + fullData);
    console.log(apiUrl);

    //fetching
    try {
      // Hacer la solicitud POST al servidor con los datos combinados
      const response = await fetch(`${apiUrl}/register/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData),
      });

      if (response.ok) {
        console.log('Registro exitoso');
        // Navegar a la siguiente página o acción
        navigate('/login');
      } else {
        console.error('Error en el registro:', response.statusText);
        setFecthError(true);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  return (
    <main className="h-screen w-full flex login-bg">
      <ReturnBtn />
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
            Registra los datos de tu mascota
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={4} align="flex-start" maxW="sm">
              <Field
                label="Nombre de tu mascota"
                invalid={!!errors.nombremascota}
                errorText={errors.nombremascota?.message}
              >
                <Input
                  {...register('nombremascota', {
                    required: 'El nombre de la mascota es obligatorio',
                  })}
                  placeholder="Nombre"
                />
              </Field>

              <Field
                label="Edad"
                invalid={!!errors.edad}
                errorText={errors.edad?.message}
              >
                <Input
                  {...register('edad', { required: 'La edad es obligatoria' })}
                  placeholder="Edad"
                />
              </Field>

              <Field
                label="Especie"
                invalid={!!errors.especie}
                errorText={errors.especie?.message}
              >
                <Input
                  {...register('especie', {
                    required: 'La especie es obligatoria',
                  })}
                  placeholder="Canino"
                />
              </Field>

              <Field
                label="Raza"
                invalid={!!errors.raza}
                errorText={errors.raza?.message}
              >
                <Input
                  {...register('raza', { required: 'La raza es obligatoria' })}
                  placeholder="Raza"
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
                Continuar
              </Button>
            </Stack>
          </form>
        </Box>
      </section>
      <section className="w-1/2 flex justify-center flex-col items-center registeruser-bg"></section>
    </main>
  );
}
