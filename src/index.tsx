import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "@erfanetoon/react-tailwind-ui";
import "highlight.js/styles/androidstudio.css";
import "@styles/app.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <ThemeProvider
            global={{
                color: "primary",
                direction: "rtl",
                borderRadius: "rounded",
                transition: "transition-all duration-300",
            }}>
            <div
                className={
                    "rounded-none rounded-sm rounded rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full" +
                    " " +
                    ""
                }></div>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
