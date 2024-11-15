import { Link, useLocation } from 'react-router-dom'

export default function SidebarDuenoMascota() {
  const location = useLocation()

  const isActive = (path) =>
    location.pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-500'

  return (
    <div className="h-full flex flex-col bg-white text-black px-14 py-6">
      <nav className="flex flex-col gap-4">
        <Link
          to="/home-dueno-mascota"
          className={`py-2 ${isActive('/home-dueno-mascota')}`}
        >
          Inicio
        </Link>
        <Link
          to="/buscar-clinica"
          className={`py-2 ${isActive('/buscar-clinica')}`}
        >
          Buscar Clinica
        </Link>
        <Link
          to="/citas-programadas"
          className={`py-2 ${isActive('/citas-programadas')}`}
        >
          Citas programadas
        </Link>
        <Link
          to="/historial-citas"
          className={`py-2 ${isActive('/historial-citas')}`}
        >
          Historial de citas
        </Link>
      </nav>
    </div>
  )
}
