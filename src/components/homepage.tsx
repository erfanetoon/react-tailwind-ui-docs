import Highlight from "react-highlight";

const Homepage = () => {
    return (
        <div>
            <div className="mb-4">
                <h1 className="font-bold text-2xl">Getting start</h1>

                <p>
                    react-tailwind-ui is working with Tailwind CSS classes -{" "}
                    <a
                        href="https://tailwindcss.com/docs/installation/framework-guides"
                        target="_blank"
                        rel="noreferrer">
                        Tailwind CSS
                    </a>
                </p>
            </div>

            <div className="mb-4">
                <p className="mb-2">
                    1. Install{" "}
                    <span className="bg-gray-200 rounded p-1">
                        @erfanetoon/react-tailwind-ui
                    </span>
                </p>

                <Highlight className="direction-ltr rounded-2xl shadow">
                    {`
npm i @erfanetoon/react-tailwind-ui
                `}
                </Highlight>
            </div>

            <div className="mb-4">
                <p className="mb-2">
                    2. Once you install @erfanetoon/react-tailwind-ui you need
                    to wrap your tailwind css configurations with the{" "}
                    <span className="bg-gray-200 rounded p-1">
                        withTailwind()
                    </span>{" "}
                    function coming from @erfanetoon/react-tailwind-ui.
                </p>

                <Highlight className="direction-ltr rounded-2xl shadow">
                    {`
const { withTailwind } = require("@erfanetoon/react-tailwind-ui");

module.exports = withTailwind({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});                `}
                </Highlight>
            </div>

            <div className="mb-4">
                <p className="mb-2">
                    3. @erfanetoon/react-tailwind-ui comes with a theme provider
                    that set's the default theme/styles for components or to
                    provide your own theme/styles to your components. You need
                    to wrap your entire application with the{" "}
                    <span className="bg-gray-200 rounded p-1">
                        ThemeProvider
                    </span>{" "}
                    coming from @erfanetoon/react-tailwind-ui.
                </p>

                <Highlight className="direction-ltr rounded-2xl shadow">
                    {`
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@erfanetoon/react-tailwind-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider global={{}}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);                `}
                </Highlight>
            </div>
        </div>
    );
};

export default Homepage;
