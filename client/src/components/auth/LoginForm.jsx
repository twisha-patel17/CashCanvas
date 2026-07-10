import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email.trim())) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!validatePassword(password.trim())) {
      setPasswordError(
  "Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character."
);
      isValid = false;
    }

    if (!isValid) return;

    setIsLoading(true);

    try {

  const response = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);

  alert("Login successful!");

  navigate("/");

} catch (error) {

  if (error.response) {
    alert(error.response.data.message);
  } else {
    alert("Something went wrong");
  }

} finally {

  setIsLoading(false);

}


  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] flex items-center justify-center flex-col px-6 lg:px-0 py-12 lg:py-0">
      <div className="w-full max-w-97.5">

        <h2 className="font-['Cormorant_Garamond'] text-[40px] font-bold text-[#1C2321] mb-1.5">
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
      autoComplete="email"
      placeholder="you@email.com"
      value={email}
      onChange={(e) => {setEmail(e.target.value);
        setEmailError("");
      }}
      className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A] ${
  emailError ? "border-red-500" : "border-[#DCD6C7]"
}`}
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
      autoComplete="current-password"
      placeholder="••••••••"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        setPasswordError("");
      }}
      className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 pr-10 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A] ${
  passwordError ? "border-red-500" : "border-[#DCD6C7]"
}`}
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

  {/* Remember Me */}

  <div className="flex items-center justify-between">
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) => setRememberMe(e.target.checked)}
      className="h-4 w-4 accent-[#2D5A4A]"
    />
    <span className="text-sm text-[#5B6360]">
      Remember me
    </span>
  </label>

  <Link
    to="/forgot-password"
    className="text-sm font-medium text-[#2D5A4A] hover:underline"
  >
    Forgot Password?
  </Link>
</div>

  {/* Login Button */}
  <button
    type="submit"
    className={`w-full rounded-[3px] py-3 text-[14px] font-semibold text-[#F3F0E6] transition-colors ${
  isLoading
    ? "bg-[#6B8A7A] cursor-not-allowed"
    : "bg-[#2D5A4A] hover:bg-[#23483b]"
}`}
    disabled={isLoading}
  >
    {isLoading ? "Logging in..." : "Log in"}
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