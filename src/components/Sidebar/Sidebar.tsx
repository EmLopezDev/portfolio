import { IconLink } from "../Icon/IconLink";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__theme">
                <button className="sidebar__theme--button">Theme</button>
            </div>
            <div className="sidebar__info">
                <img
                    className="sidebar__info--image"
                    src="/src/assets/profile_picture.jpeg"
                    alt=""
                />
                <span className="sidebar__info--name">Emmanuel Lopez</span>
                <span className="sidebar__info--location">
                    New York City, NY
                </span>
            </div>
            <span className="sidebar__bullet">&#8226;</span>
            <nav className="sidebar__nav">
                <ul className="sidebar__nav--list">
                    <li className="sidebar__nav--item">Home</li>
                    <li className="sidebar__nav--item">Projects</li>
                    <li className="sidebar__nav--item">About</li>
                </ul>
            </nav>
            <span className="sidebar__bullet">&#8226;</span>
            <div className="sidebar__social">
                <IconLink
                    href=""
                    name="linkedin"
                    size={24}
                />
                <IconLink
                    href=""
                    name="github"
                    size={24}
                />
                <IconLink
                    href=""
                    name="bluesky"
                    size={24}
                />
                <IconLink
                    href=""
                    name="xtwitter"
                    size={24}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
