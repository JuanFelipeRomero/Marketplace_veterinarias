import {useNavigate} from 'react-router-dom';
import { Card, Stack, Input, CardFooter } from '@chakra-ui/react';
import {Field} from "../components/ui/field"
import { Button } from "../components/ui/button"
import { Link } from 'react-router-dom';


export default function UserRegister(){
    
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/petregister');
    }

    return(
        <>
        <main className= "h-screen w-full flex login-bg">
            <header className='self-start mb-1 ml-4 '>
            <Link to="/" className='self-start mb-0 ml-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none" >
                    <path d="M14.9732 18.9994V0.999426C14.9727 0.817184 14.9224 0.63855 14.8279 0.48275C14.7333 0.32695 14.5981 0.199884 14.4367 0.115231C14.2753 0.0305767 14.0939 -0.00845909 13.912 0.00232315C13.73 0.0131054 13.5545 0.0732994 13.4042 0.176426L0.40425 9.17643C-0.13475 9.54943 -0.13475 10.4474 0.40425 10.8214L13.4042 19.8214C13.5542 19.9256 13.7298 19.9867 13.912 19.9981C14.0943 20.0094 14.2761 19.9706 14.4379 19.8859C14.5996 19.8012 14.735 19.6738 14.8294 19.5175C14.9238 19.3612 14.9735 19.182 14.9732 18.9994ZM2.73025 9.99943L12.9732 2.90743V17.0914L2.73025 9.99943Z" fill="#718096"/>
                </svg>
            </Link>
            </header>
            <section className="w-1/2 flex justify-center flex-col items-center bg-white p-6">
                    <Card.Root maxW='lg' bg='white' width="454px" shadow="0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)">
                        <Card.Body>
                            <Stack gap="16px" w="full">
                                <Field label="Email" color='black'>
                                    <Input 
                                        placeholder="example@example.com" 
                                        _placeholder={{fontSize:"sm"}}
                                    />
                                </Field>
                                <Field label="Contraseña" color='black'>
                                    <Input
                                        placeholder="****" 
                                        _placeholder={{fontSize:"sm"}} 
                                    />
                                </Field>
                            </Stack>
                        </Card.Body>
                        <Card.Footer justifyContent="center">
                            <Button px="20" py="1" bg="#38A169" variant="solid">Iniciar Sesión</Button>
                        </Card.Footer>
                    </Card.Root>
            </section>
            <section className='w-1/2 flex justify-center flex-col items-center loginuser-bg'>
            </section>
        </main>
        </>
    )
}