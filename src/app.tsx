import ButtonComponent from "@components/button";
import Theme from "@components/theme";

const App = () => {
    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            <Theme />

            <div className="h-2 w-full bg-gray-400 rounded-full my-8" />

            <ButtonComponent />
        </div>
    );
};

export default App;
