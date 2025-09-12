import { Link, Navigate, NavLink, Outlet } from "react-router";
import FetchDiv from "./FetchDiv";

function Header() {
  return (
    <>
      <header className="relative flex items-center h-16 px-8 text-2xl">
        <h1 className="pl-2 font-bold">Arseniy Dolgopolov's</h1>

        <Link
          to="about"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold scale-152"
        >
          ToDo App
        </Link>

        <nav className="ml-auto pr-2">
          <ul className="flex gap-6 ">
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="list">List</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
