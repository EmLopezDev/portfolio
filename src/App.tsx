import { lazy, Suspense, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ContactButton from "./components/Contact/ContactButton";

const HomePage = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const AboutPage = lazy(() => import("./pages/About"));

const Layout = () => {
    const [isFormOpen, setisFormOpen] = useState(true);
    return (
        <main className="app__container">
            <Sidebar />
            <Suspense fallback={<div>Loading Page...</div>}>
                <div className="page__container">
                    <Outlet />
                </div>
            </Suspense>
            <ContactButton setIsFormOpen={setisFormOpen} />
            {isFormOpen && (
                <div
                    className="contact__overlay"
                    onClick={() => setisFormOpen(false)}
                >
                    <aside className="contact__form">CONTACT FORM</aside>
                </div>
            )}
        </main>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path="projects"
                        element={<ProjectsPage />}
                    />
                    <Route
                        path="about"
                        element={<AboutPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
