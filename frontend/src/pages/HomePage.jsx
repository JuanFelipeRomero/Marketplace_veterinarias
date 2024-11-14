import { TopBar } from '../ownComponents/TopBar';
import { Input } from '@chakra-ui/react';

import '../App.css';

export default function HomePage() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main className="bg-white h-screen">
        <section className="home-hero-bg w-full overflow-hidden flex flex-col gap-12">
          <h1 className="font-[Lexend Zetta] text-white text-7xl text-center font-semibold w-2/3 ">
            Conectamos amantes de los animales con veterinarios
          </h1>
          <Input
            className="bg-white border-white py-6 px-6 w-1/3"
            placeholder="Buscar clinica"
          />
        </section>
        <section className="mt-12">
          <h2 className="text-center font-bold text-4xl">
            Clinicas disponibles
          </h2>
        </section>
      </main>
    </>
  );
}
