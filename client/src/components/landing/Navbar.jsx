import logo from "../../assets/cashcanvas-logo.png";
import { Link } from "react-router-dom";
import { ThemeButton } from "../common/ThemeButton";

export const Navbar = () => {

  return (
<header className="w-full bg-[#F7F5EF] border-b dark:bg-[#121212] border-gray-200 dark:border-[#262626] border-b-[#DCD6C7]">
  <div className="flex items-center justify-between mx-auto px-4 py-4 sm:px-[6%] sm:py-5">
    
    {/* Left */}
    <div className="flex items-center gap-2">
      <img src={logo} alt="CashCanvas" className="sm:w-12 sm:h-12 h-10 w-10" />
      <h1 className="sm:text-[22px] text-xl font-fraunces text-[#1C2321] dark:text-white">CashCanvas</h1>
    </div>

    {/* Right */}
    <div className="flex items-center sm:gap-5 gap-3">
      <ThemeButton />
      <Link to="/login" className="font-medium
        text-[#1C2321]
        transition-colors
        hover:text-[#2D5A4A]
        text-sm
        sm:text-base
        dark:text-white
        dark:hover:text-[#3E8E7E]">Login</Link>
      <Link to="/signup" className="px-4 py-2 bg-[#2D5A4A] rounded-[3px] transition-all
        duration-200
        hover:bg-[#23483B]
        text-sm sm:px-5
        dark:bg-[#3E8E7E]
        dark:text-white
        dark:hover:bg-[#34796C] text-[#F3F0E6] ">
        Sign up
      </Link>
    </div>

  </div>
</header>
  );
}