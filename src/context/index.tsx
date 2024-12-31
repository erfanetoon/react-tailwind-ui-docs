import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import mainContextDefaultValue from "./settings";
import type { IMainContext } from "./types";

interface Props {
    children: ReactNode;
}

const Context = createContext<IMainContext>(mainContextDefaultValue);

export function MainContextProvider({ children }: Props) {
    const [contextData, setContextData] = useState<IMainContext>({
        ...mainContextDefaultValue,
    });

    const handleChange: IMainContext["handleChange"] = ({ page }) => {
        setContextData({
            ...contextData,
            page,
        });
    };

    const providerValues = useMemo(
        () => ({
            ...contextData,
            handleChange,
        }),
        [contextData, handleChange],
    );

    return (
        <Context.Provider value={providerValues}>{children}</Context.Provider>
    );
}

export const useMainContext = () => useContext(Context);
