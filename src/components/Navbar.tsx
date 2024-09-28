import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
