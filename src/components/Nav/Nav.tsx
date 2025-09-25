import useWindowSize from "../../hooks/useWindowSize";
import ContactButton from "../Contact/ContactButton";
import NavItem from "./NavItem";
import { navData } from "./navData";

type NavType = {
    setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ setOpenContact }: NavType) {
    const { isMobile } = useWindowSize();
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
                {isMobile && (
                    <li>
                        <ContactButton
                            className="nav__list--button"
                            setIsOpen={setOpenContact}
                        />
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
