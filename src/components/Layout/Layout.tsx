import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ContactButton from "../Contact/ContactButton";
import ContactForm from "../Contact/ContactForm";
import Toast from "../Toast/Toast";
import { useToast } from "../Toast/useToast";

function Layout() {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const { showToast, setShowToast, onCloseToast } = useToast();

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
                    handleShowToast={setShowToast}
                />
            )}
            <Toast
                toast={showToast}
                handleCloseToast={onCloseToast}
            />
        </main>
    );
}
export default Layout;
