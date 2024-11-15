import { Outlet } from 'react-router-dom'
import SidebarDuenoMascota from './SidebarDuenoMascota'
import BuscarClinica from './BuscarClinica'
import DetallesClinica from './DetallesClinica'

export default function LayoutDuenoMascota() {
  return (
    <div className="grid grid-cols-[250px_1fr] w-full h-full">
      <SidebarDuenoMascota />
      <div className="p-4 overflow-y-auto">
        {/* <Outlet /> */}
        {/* <BuscarClinica /> */}
        {/* <DetallesClinica /> */}
      </div>
    </div>
  )
}
