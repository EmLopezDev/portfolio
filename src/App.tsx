import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LoadingPage from "./pages/LoadingPage";

const ProjectsPage = lazy(() => import("./pages/Projects"));
const AboutPage = lazy(() => import("./pages/About"));

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
                        element={<Home />}
                    />
                    <Route
                        path="projects"
                        element={
                            <Suspense fallback={<LoadingPage />}>
                                <ProjectsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <Suspense fallback={<LoadingPage />}>
                                <AboutPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
