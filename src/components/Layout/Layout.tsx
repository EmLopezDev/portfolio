import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ContactButton from "../Contact/ContactButton";
import ContactForm from "../Contact/ContactForm";
import Toast from "../Toast/Toast";

function Layout() {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    return (
        <main className="app__container">
            <Sidebar />
            <div className="page__container">
                <Outlet />
            </div>
            <ContactButton setIsOpen={setIsFormOpen} />
            {isFormOpen && (
                <ContactForm
                    isOpen={isFormOpen}
                    setIsOpen={setIsFormOpen}
                />
            )}
            <Toast />
        </main>
    );
}
export default Layout;
