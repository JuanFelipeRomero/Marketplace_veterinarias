import { useNavigate } from 'react-router-dom';
import { Card, Stack, Input, CardFooter } from '@chakra-ui/react';
import { Field } from '../components/ui/field';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ReturnBtn } from '../ownComponents/ReturnBtn';

export default function UserRegister() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/petregister');
  };

  return (
    <>
      <main className="h-screen w-full flex login-bg">
        <ReturnBtn />
        <section className="w-1/2 flex justify-center flex-col items-center bg-white p-6">
          <Card.Root
            maxW="lg"
            bg="white"
            width="454px"
            shadow="0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
          >
            <Card.Body>
              <Stack gap="16px" w="full">
                <Field label="Email" color="black">
                  <Input
                    placeholder="example@example.com"
                    _placeholder={{ fontSize: 'sm' }}
                  />
                </Field>
                <Field label="Contraseña" color="black">
                  <Input placeholder="****" _placeholder={{ fontSize: 'sm' }} />
                </Field>
              </Stack>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <Button px="20" py="1" bg="#38A169" variant="solid">
                Iniciar Sesión
              </Button>
            </Card.Footer>
          </Card.Root>
        </section>
        <section className="w-1/2 flex justify-center flex-col items-center loginuser-bg"></section>
      </main>
    </>
  );
}
