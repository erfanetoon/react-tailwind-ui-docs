import ButtonComponent from "@components/button";
import Theme from "@components/theme";
import { useMainContext } from "./context";
import Homepage from "@components/homepage";
import IconButtonComponent from "@components/iconButton";
import ChipComponent from "@components/chip";

const App = () => {
    const { page } = useMainContext();

    return (
        <div className="p-4">
            <div className="bg-white rounded-xl p-8">
                {page === "homepage" && <Homepage />}

                {page === "theme" && <Theme />}

                {page === "button" && <ButtonComponent />}

                {page === "iconButton" && <IconButtonComponent />}

                {page === "chip" && <ChipComponent />}
            </div>
        </div>
    );
};

export default App;
