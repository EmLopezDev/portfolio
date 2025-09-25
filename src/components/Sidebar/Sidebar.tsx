import { IconLink } from "../Icon/IconLink";
import ThemeButton from "../ThemeButton/ThemeButton";
import Nav from "../Nav/Nav";
import useWindowSize from "../../hooks/useWindowSize";

type SidebarType = {
    setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setIsContactOpen }: SidebarType) {
    const { isMobile, isDesktop } = useWindowSize();
    return (
        <aside className="sidebar">
            {isDesktop && (
                <div className="sidebar__theme">
                    <ThemeButton />
                </div>
            )}
            <div className="sidebar__info">
                <div className="sidebar__info--container">
                    <img
                        className="sidebar__info--image"
                        src="/src/assets/images/profile_picture.jpeg"
                        alt=""
                    />
                    <div className="sidebar__info--personal">
                        <span className="sidebar__info--name">
                            Emmanuel Lopez
                        </span>
                        <span className="sidebar__info--location">
                            New York City, NY
                        </span>
                    </div>
                </div>
                {isMobile && (
                    <div className="sidebar__theme">
                        <ThemeButton />
                    </div>
                )}
            </div>
            <span className="sidebar__bullet">&#8226;</span>
            <Nav setOpenContact={setIsContactOpen} />
            <span className="sidebar__bullet">&#8226;</span>
            <div className="sidebar__social">
                <IconLink
                    className="sidebar__social--item"
                    href="http://www.linkedin.com/in/emmanuel-lopez-a812b0127"
                    name="linkedin"
                    size={24}
                    target="_blank"
                />
                <IconLink
                    className="sidebar__social--item"
                    href="https://github.com/EmLopezDev"
                    name="github"
                    size={24}
                    target="_blank"
                />
                <IconLink
                    className="sidebar__social--item"
                    href="https://bsky.app/profile/emlopezdev.bsky.social"
                    name="bluesky"
                    size={24}
                    target="_blank"
                />
                <IconLink
                    className="sidebar__social--item"
                    href="https://x.com/emlopezdev"
                    name="xtwitter"
                    size={24}
                    target="_blank"
                />
            </div>
        </aside>
    );
}

export default Sidebar;
