import { Link, useLocation } from 'react-router-dom'

export default function SidebarDuenoMascota() {
  const location = useLocation()

  const isActive = (path) =>
    location.pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-500'

  return (
    <div className="h-full flex flex-col bg-white text-black px-14 py-6">
      <nav className="flex flex-col gap-4">
        <Link
          to="/home-page-Dueno"
          className={`py-2 ${isActive('/home-page-Dueno')}`}
        >
          Inicio
        </Link>
        <Link
          to="/home-page-Dueno/buscar-clinica"
          className={`py-2 ${isActive('/home-page-Dueno/buscar-clinica')}`}
        >
          Buscar Clinica
        </Link>
        <Link
          to="/citas-programadas"
          className={`py-2 ${isActive('/home-page-Dueno/citas-programadas')}`}
        >
          Citas programadas
        </Link>
        <Link
          to="/historial-citas"
          className={`py-2 ${isActive('/home-page-Dueno/historial-citas')}`}
        >
          Historial de citas
        </Link>
      </nav>
    </div>
  )
}
