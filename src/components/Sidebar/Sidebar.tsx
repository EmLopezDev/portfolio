import React from "react";

function Sidebar() {
    return (
        <aside className="sideBar">
            <div>
                <button>Theme</button>
            </div>
            <figure>
                <img
                    style={{ borderRadius: "50%" }}
                    width={100}
                    src="/src/assets/profile_picture.jpeg"
                    alt=""
                />
            </figure>
            <span>&#8226;</span>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                </ul>
            </nav>
            <span>&#8226;</span>
            <div>SOCIAL MEDIA</div>
        </aside>
    );
}

export default Sidebar;
