import {
    FiMoon,
    FiSun,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export const DashboardTopbar = () => {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    const user = JSON.parse(localStorage.getItem("user"));

    const avatarLetter = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "U";

    const navigate = useNavigate();
    return (

        <div className="flex items-center justify-end mb-8">

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

                {/* Profile */}

                <button

                    onClick={() => navigate("/profile")}

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

