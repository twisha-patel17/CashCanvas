import { FiMenu } from "react-icons/fi";

export const MobileSidebarButton = ({
    setIsSidebarOpen,
}) => {
    return (

        <button

            onClick={() =>
                setIsSidebarOpen(true)
            }

            className="
            lg:hidden
            rounded-xl
            border
            border-[#DCD6C7]
            dark:border-[#3A3A3A]
            bg-white
            dark:bg-[#1F1F1F]
            p-3
            text-xl
            text-[#1C2321]
            dark:text-white
            "

        >

            <FiMenu />

        </button>

    );
};