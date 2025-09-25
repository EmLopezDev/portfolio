import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ContactButton from "../Contact/ContactButton";
import ContactForm from "../Contact/ContactForm";
import Toast from "../Toast/Toast";
import { useToast } from "../Toast/useToast";
import useWindowSize from "../../hooks/useWindowSize";

function Layout() {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const { showToast, setShowToast, onCloseToast } = useToast();
    const { isDesktop } = useWindowSize();

    return (
        <main className="app__container">
            <Sidebar setIsContactOpen={setIsFormOpen} />
            <section className="page__container">
                {isDesktop && (
                    <div className="page__container--meta">
                        <span>WEATHER???</span>
                        <ContactButton
                            className="contact__button"
                            setIsOpen={setIsFormOpen}
                        />
                    </div>
                )}
                <div className="page">
                    <Outlet />
                </div>
            </section>
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
