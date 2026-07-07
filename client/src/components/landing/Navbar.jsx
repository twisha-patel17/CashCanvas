import logo from "../../assets/cashcanvas-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
<header className="w-full bg-[#F7F5EF] border-b border-gray-200 border-b-[#DCD6C7]">
  <div className="flex items-center justify-between mx-auto px-[6%] py-5.5">
    
    {/* Left */}
    <div className="flex items-center gap-3 pl-20">
      <img src={logo} alt="CashCanvas" className="w-12 h-12" />
      <h1 className="text-[22px] font-fraunces text-[#1C2321]">CashCanvas</h1>
    </div>

    {/* Right */}
    <div className="flex items-center gap-5 pr-20">
      <Link to="/login">Login</Link>
      <Link to="/signup" className="px-5 py-2 bg-[#2D5A4A] text-[#F3F0E6] ">
        Sign up
      </Link>
    </div>

  </div>
</header>
  );
}