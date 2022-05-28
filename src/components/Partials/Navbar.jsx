import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar py-4 shadow sticky bg-white z-30" style={{top: 0}}>
      <div className="container mx-auto">
        <ul className="links flex items-center">
          <li>
            <NavLink to="/" className="link px-4 py-2 font-semibold text-lg">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link px-4 py-2 font-semibold text-lg">Guides Flights About</NavLink>
          </li>
          <li className="flex-grow flex justify-end">
            <NavLink to="/contact" className="link px-4 py-2 font-semibold text-lg rounded border-2">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
