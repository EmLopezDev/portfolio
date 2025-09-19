import { type NavDataType } from "./navData";
import { Link } from "react-router-dom";
import { capitalize } from "../../lib/string.utils";
import { useLocation } from "react-router-dom";

function NavItem({ path, pathName }: Omit<NavDataType, "id">) {
    const location = useLocation();
    const active = location.pathname === path;
    return (
        <li className={`nav__list--item ${active ? "active" : ""}`}>
            <Link to={path}>{capitalize(pathName)}</Link>
        </li>
    );
}

export default NavItem;
