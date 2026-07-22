import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../api/authApi";
import toast from "react-hot-toast";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 const handleSubmit = async (e) => {

    e.preventDefault();

    setEmailError("");
  

    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email.trim())) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!isValid) return;


    setIsLoading(true);
    const toastId = toast.loading("Sending reset link...");

    try {

        const response = await forgotPassword(email);

        toast.success(response.message, { id: toastId });
        setEmail("");


    } catch (error) {

        if (error.response) {
          toast.error(error.response.data.message, { id: toastId });

        }

        else {

            toast.error("Something went wrong", { id: toastId });

        }

    }

    finally {

        setIsLoading(false);

    }

};

  return (
    <div className="w-full max-w-md">
      <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold dark:text-white text-[#1C2321]">
        Forgot password?
      </h2>

      <p className="mt-2 mb-8 text-[#5B6360] dark:text-[#B0B0B0] text-sm sm:text-[15px] leading-6">
        Enter the email on your account and we'll send a link to reset it.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="block mb-1.5 text-[12px] tracking-[0.02em] font-semibold text-[#5B6360] dark:text-[#B0B0B0]"
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
            className={`w-full rounded-[3px] border bg-[#FDFCF9] dark:bg-[#262626] dark:text-white  px-3 py-2.75 text-[14px] outline-none placeholder:text-[#9CA3AF] dark:placeholder:text-[#808080] dark:border-[#3A3A3A] focus:border-[#2D5A4A] ${
              emailError ? "border-red-500" : "border-[#DCD6C7] dark:border-[#3A3A3A]"
            }`}
          />

          {emailError && (
            <p className="mt-1 text-sm wrap-break-word text-red-500">
              {emailError}
            </p>
          )}
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-[3px] py-3 text-sm sm:text-[14px] dark:text-[#B0B0B0] font-semibold text-[#F3F0E6] transition-colors ${
            isLoading
              ? "bg-[#6B8A7A] cursor-not-allowed"
              : "bg-[#2D5A4A] hover:bg-[#23483b]"
          }`}
        >
          {isLoading ? "Sending..." : "Send reset link"}
        </button>

      </form>

      <p className="mt-8 text-center text-[14px] text-[#5B6360] dark:text-[#B0B0B0]">
        Remembered it after all?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#2D5A4A] hover:underline dark:text-[#3E8E7E]"
        >
          Back to login
        </Link>
      </p>
    </div>
  );
};