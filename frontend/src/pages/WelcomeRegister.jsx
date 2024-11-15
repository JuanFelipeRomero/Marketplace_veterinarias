import { Button } from '../components/ui/button';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReturnBtn } from '../ownComponents/ReturnBtn';

export default function WelcomeRegister() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/registeruser');
  };

  return (
    <>
      <main className="h-screen w-full welcome-bg">
        <ReturnBtn />
        <section className="h-[90%] flex flex-col justify-center pl-[10%]">
          <div className=" flex flex-col ">
            <p className="w-[610px] text-white md:text-[28px] ">
              Fácil y Rápido: Administra tus Citas y Servicios para tus
              peluditos en un solo lugar
            </p>
            <div className="mt-6 text-shadow-custom">
              <h1 className="w-[800px] text-white md:text-[52px] font-semibold">
                Crea tu Cuenta para poder agendar citas para tus mascotas
              </h1>
            </div>
            <div className="mt-6 pl-[2%]">
              <Button
                className="text-white"
                onClick={handleClick}
                size="md"
                variant="solid"
                bg="#38A169"
                px="9"
                py="1"
              >
                Registrarse
              </Button>
              <Link
                className="pl-[2%] mt-4 block text-white underline"
                to="/login"
              >
                Iniciar Sesion
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
