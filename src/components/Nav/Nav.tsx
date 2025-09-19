import NavItem from "./NavItem";
import { navData } from "./navData";

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navData.map((item) => (
                    <NavItem
                        key={item.id}
                        path={item.path}
                        pathName={item.pathName}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
