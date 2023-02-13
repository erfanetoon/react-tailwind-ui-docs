import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
// import { ThemeProvider } from "@erfanetoon/react-tailwind-ui";
import "@styles/app.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        {/* <ThemeProvider
            global={{
                color: "primary",
                direction: "rtl",
            }}> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>,
);
