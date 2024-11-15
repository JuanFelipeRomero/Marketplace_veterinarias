import { useNavigate } from 'react-router-dom';
import { Card, Stack, Input } from '@chakra-ui/react';
import { Field } from '../components/ui/field';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ReturnBtn } from '../ownComponents/ReturnBtn';

export default function UserRegister() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate();
  };

  return (
    <>
      <main className="h-screen w-full flex login-bg">
        <ReturnBtn />
        <section className="w-1/2 flex justify-center flex-col items-center bg-white p-8">
          <h2 className="md:text-[30px] text-black font-semibold text-center mb-6">
            Registra los datos de tu mascota
          </h2>
          <Card.Root
            maxW="lg"
            bg="white"
            width="454px"
            shadow="0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
          >
            <Card.Body>
              <Stack gap="16px" w="full">
                <Field label="Nombre" color="black">
                  <Input
                    placeholder="Nombre"
                    _placeholder={{ fontSize: 'sm' }}
                  />
                </Field>
                <Field label="Edad" color="black">
                  <Input placeholder="Edad" _placeholder={{ fontSize: 'sm' }} />
                </Field>
                <Field label="Especie" color="black">
                  <Input
                    placeholder="Especie"
                    _placeholder={{ fontSize: 'sm' }}
                  />
                </Field>
                <Field label="Raza" color="black">
                  <Input placeholder="Raza" _placeholder={{ fontSize: 'sm' }} />
                </Field>
              </Stack>
            </Card.Body>
          </Card.Root>
          <div className="mt-10">
            <Button
              onClick={handleClick}
              size="sm"
              variant="solid"
              bg="#38A169"
              px="20"
              py="1"
            >
              Continuar
            </Button>
          </div>
        </section>
        <section className="w-1/2 flex justify-center flex-col items-center registeruser-bg"></section>
      </main>
    </>
  );
}
