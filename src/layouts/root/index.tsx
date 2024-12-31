import { PropsWithChildren } from "react";
import Sidebar from "./inc/sidebar";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-stretch h-screen w-screen">
            <aside className="w-96">
                <Sidebar />
            </aside>

            <main className="w-full flex-1 bg-gray-100">{children}</main>
        </div>
    );
};

export default RootLayout;
