export const LoginForm = () => {
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

      <form className="space-y-5 w-full max-w-97.5">

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

  {/* Remember me + Forgot password */}
  <div className="flex items-center justify-between">

    <label className="flex items-center gap-2 text-[13px] text-[#1C2321] cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4 accent-[#2D5A4A]"
      />
      Remember me
    </label>

    <a
      href="#"
      className="text-[13px] font-semibold text-[#2D5A4A] hover:underline"
    >
      Forgot password?
    </a>

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
  <a
    href="#"
    className="font-semibold text-[#2D5A4A] hover:underline"
  >
    Sign up
  </a>
</div>

    </div>
  );
};