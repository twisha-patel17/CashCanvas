import { useState } from "react";
import {Link} from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    console.log("Email:", email);
    console.log("Password:", password);

  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] flex items-center justify-center flex-col px-6 lg:px-0 py-12 lg:py-0">
      <div className="w-full max-w-97.5">

        <h2 className="font-fraunces text-[33px] font-medium text-[#1C2321] mb-1.5">
          Welcome back
        </h2>

        <p className="text-[15px] text-[#5B6360] mb-8">
          Log in to pick up your ledger where you left it.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-97.5">

  {/* Email */}
  <div>
    <label
      htmlFor="email"
      className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360]"
    >
      Email
    </label>

    <input
      id="email"
      type="email"
      placeholder="you@email.com"
      value={email}
      onChange={(e) => {setEmail(e.target.value);
        setEmailError("");
      }}
      className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]" 
    />

   {emailError && (
     <p className="text-sm text-red-500 mt-1">{emailError}</p>
   )}

  </div>

  {/* Password */}
<div>
  <label
    htmlFor="password"
    className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360]"
  >
    Password
  </label>

  <div className="relative">
    <input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        setPasswordError("");
      }}
      className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 pr-10 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 flex items-center text-[#5B6360] hover:text-[#2D5A4A]"
    >
      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
    </button>
  </div>

  {passwordError && (
    <p className="mt-1 text-sm text-red-500">
      {passwordError}
    </p>
  )}
</div>

  {/* Login Button */}
  <button
    type="submit"
    className="w-full rounded-[3px] bg-[#2D5A4A] py-3 text-[14px] font-semibold text-[#F3F0E6] transition-colors hover:bg-[#23483b]"
  >
    Log in
  </button>

</form>

{/* Footer */}

<div className="mt-5.5 text-center text-[13px] text-[#5B6360]">
  Don't have an account?{" "}
  <Link
    to="/signup"
    className="font-semibold text-[#2D5A4A] hover:underline"
  >
    Sign up
  </Link>
</div>

    </div>
  );
};