import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ContactButton from "../Contact/ContactButton";
import ContactForm from "../Contact/ContactForm";

function Layout() {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    return (
        <main className="app__container">
            <Sidebar />
            <div className="page__container">
                <Outlet />
            </div>
            <ContactButton setIsFormOpen={setIsFormOpen} />
            {isFormOpen && (
                <div
                    className="contact__overlay"
                    onClick={() => setIsFormOpen(false)}
                >
                    <ContactForm setIsFormOpen={setIsFormOpen} />
                </div>
            )}
        </main>
    );
}
export default Layout;
