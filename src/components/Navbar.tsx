import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
                Акатцуки
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts" className="nav-link">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;