import api from "../../api/axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const SignUpForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setNameError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }else if (name.trim().length < 3) {
  setNameError("Name must be at least 3 characters");
  isValid = false;
} else if (name.trim().length > 30) {
  setNameError("Name must not exceed 30 characters");
  isValid = false;
}

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

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) {
  return;
}

    setIsLoading(true);

try {

  await api.post("/auth/register", {
    name,
    email,
    password,
  });

  alert("Account created successfully!");

  setName("");
setEmail("");
setPassword("");
setConfirmPassword("");

navigate("/login");

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

  return (
    <div className="w-full max-w-md">
      <h2 className="font-['Cormorant_Garamond'] text-[40px] font-bold text-[#1C2321]">
        Create your account
      </h2>

      <p className="mt-2 mb-8 text-[#5B6360] text-[15px] leading-6">
        Takes less than a minute. No card required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360]"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]
         ${nameError ? "border-red-500" : "border-[#DCD6C7]"}`}
          />
          {nameError && (
     <p className="text-sm text-red-500 mt-1">{nameError}</p>
   )}
        </div>

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
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]
${emailError ? "border-red-500" : "border-[#DCD6C7]"}`}
          />
          {emailError && (
     <p className="text-sm text-red-500 mt-1">{emailError}</p>
   )}
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-2 gap-4">
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
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 py-2.75 pr-10 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]
${passwordError ? "border-red-500" : "border-[#DCD6C7]"}`}
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360]"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
              className={`w-full rounded-[3px] border bg-[#FDFCF9] px-3 py-2.75 pr-10 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]
${
  confirmPasswordError
    ? "border-red-500"
    : "border-[#DCD6C7]"
}`}
            />

            <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#5B6360] hover:text-[#2D5A4A]"
                >
                  {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>

            </div>

            {confirmPasswordError && (
    <p className="mt-1 text-sm text-red-500">
      {confirmPasswordError}
    </p>
  )}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className={`w-full rounded-[3px] py-3 text-[14px] font-semibold text-[#F3F0E6] transition-colors
${
  isLoading
    ? "bg-[#6B8A7A] cursor-not-allowed"
    : "bg-[#2D5A4A] hover:bg-[#23483b]"
}`}
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-[14px] text-[#5B6360]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#2D5A4A] hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};