import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, Stack, Heading } from '@chakra-ui/react';
import { Field } from '../components/ui/field'; // Asegúrate de tener un componente `Field` reutilizable
import { ReturnBtn } from '../ownComponents/ReturnBtn';

// Schema del formulario
const userSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  email: z.string().email('Por favor ingresa un email válido'),
  telefono: z
    .string()
    .min(10, 'El teléfono debe tener al menos 10 dígitos')
    .regex(/^\d+$/, 'El teléfono solo debe contener números'),
  contrasena: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export default function UserRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      contrasena: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Datos enviados: ', data);

    // Guardar datos en localstorage momentáneamente
    localStorage.setItem('personalInfo', JSON.stringify(data));

    // Navegar al registro de mascota
    navigate('/petregister');
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
            Ingresa tu información personal
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={4} align="flex-start" maxW="sm">
              <Field
                label="Nombre"
                invalid={!!errors.nombre}
                errorText={errors.nombre?.message}
              >
                <Input
                  {...register('nombre', {
                    required: 'El nombre es obligatorio',
                  })}
                  placeholder="Nombre"
                />
              </Field>

              <Field
                label="Email"
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  {...register('email', {
                    required: 'El email es obligatorio',
                  })}
                  placeholder="Email"
                />
              </Field>

              <Field
                label="Teléfono"
                invalid={!!errors.telefono}
                errorText={errors.telefono?.message}
              >
                <Input
                  {...register('telefono', {
                    required: 'El teléfono es obligatorio',
                  })}
                  placeholder="3211234567"
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
                  type="password"
                  placeholder="******"
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
