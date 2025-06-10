import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";

const Details = lazy(() => {
    return import(`./components/Details/Details`);
});

const App = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <HeroSection />
                        <HowItWorks />
                    </>
                ),
            },
            {
                path: "/details/:problems?/:location?/:insurance?/",
                element: (
                    <Suspense fallback={"Loading..."}>
                        <Details />
                    </Suspense>
                ),
            },
        ],
    },
]);

const getRoot = document.getElementById("root");
const root = ReactDOM.createRoot(getRoot);

root.render(<RouterProvider router={routes} />);
