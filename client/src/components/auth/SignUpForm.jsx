import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <div className="w-full max-w-md">
      <h2 className="font-['Cormorant_Garamond'] text-[40px] font-bold text-[#1C2321]">
        Create your account
      </h2>

      <p className="mt-2 mb-8 text-[#5B6360] text-[15px] leading-6">
        Takes less than a minute. No card required.
      </p>

      <form className="space-y-5">
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
            placeholder="Full name"
            className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]"
          />
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
            placeholder="you@email.com"
            className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]"
          />
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

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360]"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9] px-3 py-2.75 text-[14px] text-[#1C2321] outline-none focus:border-[#2D5A4A]"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-[3px] bg-[#2D5A4A] py-3 text-[14px] font-semibold text-[#F3F0E6] transition-colors hover:bg-[#23483b]"
        >
          Create account
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