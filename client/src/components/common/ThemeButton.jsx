import { FiMoon,FiSun } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

export const ThemeButton = ()=>{

    const {theme,toggleTheme,} = useTheme();

    return(
        <button
        onClick={toggleTheme}
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        text-xl
        text-[#B8934A]
        transition-all
        duration-200
        hover:scale-110
        hover:text-[#D4AF37]
        "
        >
        {theme==="light" ?<FiMoon/>:<FiSun/>}
        </button>
    );

};