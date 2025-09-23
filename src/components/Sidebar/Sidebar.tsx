import { IconLink } from "../Icon/IconLink";
import ThemeButton from "../ThemeButton/ThemeButton";
import Nav from "../Nav/Nav";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__theme">
                <ThemeButton />
            </div>
            <div className="sidebar__info">
                <img
                    className="sidebar__info--image"
                    src="/src/assets/images/profile_picture.jpeg"
                    alt=""
                />
                <span className="sidebar__info--name">Emmanuel Lopez</span>
                <span className="sidebar__info--location">
                    New York City, NY
                </span>
            </div>
            <span className="sidebar__bullet">&#8226;</span>
            <Nav />
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
