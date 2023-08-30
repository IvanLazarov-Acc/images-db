import { NavLink, Outlet } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <NavLink className="nav-link" to="/">
                        Home Page
                    </NavLink>
                    <NavLink className="nav-link" to="/images">
                        Images
                    </NavLink>
                    <NavLink className="nav-link" to="/users">
                        Users
                    </NavLink>
                    <NavLink className="nav-link" to="/contacts">
                        Contacts
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    );
}