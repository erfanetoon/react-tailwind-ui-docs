export interface IMainContext {
    page:
        | "homepage"
        | "theme"
        | "button"
        | "chip"
        | "codeInput"
        | "dropdown"
        | "hint"
        | "iconButton"
        | "input"
        | "passwordInput"
        | "textarea"
        | "tooltip";

    handleChange: (_: { page: IMainContext["page"] }) => void;
}
