import { Link, NavLink, Outlet, useNavigate } from "react-router"; // Исправлен импорт
import { AUTH_ACTIONS, useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated, currentUser, dispatch } = useAuth();
  const { LOGOUT } = AUTH_ACTIONS;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/login", { replace: true });
  };

  return (
    <>
      <header className="relative flex items-center h-16 px-8 text-2xl">
        <h1 className="pl-2 font-bold">Arseniy Dolgopolov's</h1>

        <Link
          to="/"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold scale-152"
        >
          ToDo App
        </Link>

        <nav className="ml-auto pr-2">
          <ul className="flex gap-6">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink to={`/${currentUser?.username}/list`}>List</NavLink>
                </li>
                <li>
                  <button className="nav-button" onClick={handleLogout}>
                    LOG OUT
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">LOG IN</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
