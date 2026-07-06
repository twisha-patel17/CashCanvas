import logo from "../../assets/cashcanvas-logo.png";

export const Navbar = () => {

  return (
<header className="w-full bg-[#F7F5EF] border-b border-gray-200">
  <div className="flex items-center justify-between h-20 ">
    
    {/* Left */}
    <div className="flex items-center gap-3 pl-20">
      <img src={logo} alt="CashCanvas" className="w-12 h-12" />
      <h1 className="text-3xl font-bold">CashCanvas</h1>
    </div>

    {/* Right */}
    <div className="flex items-center gap-5 pr-20">
      <button>Login</button>
      <button className="px-5 py-2 bg-green-800 text-white ">
        Sign up
      </button>
    </div>

  </div>
</header>
  );
}