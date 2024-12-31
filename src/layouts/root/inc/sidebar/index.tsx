import { useMainContext } from "../../../../context";
import { IMainContext } from "../../../../context/types";

const Sidebar = () => {
    const { handleChange } = useMainContext();

    return (
        <div className="p-4 overflow-auto h-full">
            <h2 className="font-bold">Components</h2>

            <div className="bg-gray-100 my-2 h-0.5" />

            <ul className="flex flex-col w-full gap-2">
                {(
                    [
                        "homepage",
                        "theme",
                        "button",
                        "chip",
                        "codeInput",
                        "dropdown",
                        "hint",
                        "iconButton",
                        "input",
                        "passwordInput",
                        "textarea",
                        "tooltip",
                    ] as IMainContext["page"][]
                ).map((item) => (
                    <li key={item} className="w-full">
                        <button
                            className="p-3 rounded hover:bg-gray-200 transition-all duration-300 block w-full text-start"
                            onClick={() =>
                                handleChange({
                                    page: item,
                                })
                            }>
                            {item.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
