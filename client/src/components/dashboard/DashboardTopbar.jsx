import {
    FiSearch,
    FiMoon,
    FiSun,
    FiBell,
} from "react-icons/fi";

import { useTheme } from "../../contexts/ThemeContext";

export const DashboardTopbar = () => {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    return (

        <div className="flex items-center justify-between mb-8">

            {/* Search Bar */}

            <div className="relative w-[320px]">

                <FiSearch
                    className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    text-lg
                    "
                />

                <input

                    type="text"

                    placeholder="Search transactions..."

                    className="
                    w-full
                    rounded-lg
                    border
                    border-[#DCD6C7]
                    dark:border-[#3A3A3A]
                    bg-[#FDFCF9]
                    dark:bg-[#2A2A2A]
                    py-2.5
                    pl-10
                    pr-4
                    text-sm
                    text-[#1C2321]
                    dark:text-white
                    shadow-sm
                    outline-none
                    focus:border-[#2D5A4A]
                    focus:ring-2
                    focus:ring-[#2D5A4A]/20
                    "

                />

            </div>


            {/* Right Side */}

            <div className="flex items-center gap-5">

                {/* Theme Button */}

                <button

                    onClick={toggleTheme}

                    className="
                    text-[#B8934A]
                    text-xl
                    transition-all
                    duration-200
                    hover:scale-110
                    hover:text-[#D4AF37]
                    "

                >

                    {

                        theme === "light"

                            ? <FiMoon />

                            : <FiSun />

                    }

                </button>


                {/* Notification */}

                <button
                    className="
                    text-[#B8934A]
                    text-xl
                    transition-all
                    duration-200
                    hover:scale-110
                    hover:text-[#D4AF37]
                    "
                >

                    <FiBell />

                </button>


                {/* Profile */}

                <button
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

                    TP

                </button>

            </div>

        </div>

    );

};

