import { useState } from 'react';
import { Link } from 'react-router-dom';

export function TopBar() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div className="flex justify-between bg-white h-24 items-center px-20">
        <p className="font-lexend w-1/6 text-2xl font-medium">
          LETY MARKETPLACE
        </p>
        {isLogged ? <Link>Usuario</Link> : <Link>Ingresar</Link>}
      </div>
    </>
  );
}
