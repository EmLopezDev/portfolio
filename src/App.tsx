import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Loading from "./pages/Loading";

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
                            <Suspense fallback={<Loading />}>
                                <ProjectsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <Suspense fallback={<Loading />}>
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
