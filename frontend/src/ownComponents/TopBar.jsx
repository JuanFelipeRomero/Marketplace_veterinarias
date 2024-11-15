import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../stores/useAuthStore'

export function TopBar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const logout = useAuthStore((state) => state.logout)

  return (
    <>
      <div className="flex justify-between bg-white h-24 items-center px-20">
        <p className="font-lexend w-1/6 text-2xl font-medium">
          LETY MARKETPLACE
        </p>
        {isAuthenticated ? (
          <Link>Usuario</Link>
        ) : (
          <Link to="/registerwelcome">Ingresar</Link>
        )}
      </div>
    </>
  )
}
