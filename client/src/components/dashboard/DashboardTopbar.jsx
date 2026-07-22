import {
   
    FiMenu,
} from "react-icons/fi";
import { ThemeButton } from "../common/ThemeButton";

import { useNavigate } from "react-router-dom";

export const DashboardTopbar = ({
    setIsSidebarOpen,
}) => {


    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const avatarLetter =
        user?.name
            ? user.name.charAt(0).toUpperCase()
            : "U";

    const navigate = useNavigate();

    return (

        <div className="flex items-center justify-between mb-8">

            {/* Mobile Menu Button */}

            <button
                onClick={() =>
                    setIsSidebarOpen(true)
                }
                className="
                lg:hidden
                text-2xl
                text-[#1C2321]
                dark:text-white
                "
            >
                <FiMenu />
            </button>

            {/* Right Side */}

            <div className="flex items-center gap-3 sm:gap-5 ml-auto">

                <ThemeButton />

                {/* Profile */}

                <button
                    onClick={() =>
                        navigate("/profile")
                    }
                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B8934A]
                    text-sm
                    font-bold
                    text-[#241A06]
                    hover:scale-105
                    transition
                    "
                >

                    {avatarLetter}

                </button>

            </div>

        </div>

    );

};

