import { FiMenu } from "react-icons/fi";

export const SettingsTopbar = ({
    setIsSidebarOpen,
}) => {
    return (

        <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-[#DCD6C7]
        bg-white
        px-8
        py-5
        dark:border-[#3A3A3A]
        dark:bg-[#1F1F1F]
        "
        >

            <div
            className="
            flex
            items-center
            gap-4
            "
            >

                <button
                onClick={()=>
                setIsSidebarOpen(true)
                }
                className="
                text-2xl
                text-[#1C2321]
                dark:text-white
                lg:hidden
                "
                >
                    <FiMenu/>
                </button>

                <h1
                className="
                text-2xl
                font-bold
                text-[#1C2321]
                dark:text-white
                sm:text-3xl
                "
                >
                    Settings
                </h1>

            </div>

        </div>

    );
};