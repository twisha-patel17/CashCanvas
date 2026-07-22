import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#121816] flex items-center justify-center px-6 transition-colors duration-300">
      <div className="text-center max-w-md">

        <h1 className="text-7xl sm:text-8xl font-bold text-[#1F3F34] dark:text-[#E6E1D5]">
          404
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1C2321] dark:text-white">
          Page not found
        </h2>

        <p className="mt-3 text-sm sm:text-base leading-6 text-[#5B6360] dark:text-[#A7B0AB]">
          Looks like this page doesn't exist in your CashCanvas ledger.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-8">

          <Link
            to="/dashboard"
            className="flex w-full justify-center sm:w-auto items-center gap-2 px-5 py-3 rounded-xl bg-[#1F3F34] text-white hover:bg-[#2D5A4A] transition"
          >
            <FiHome />
            Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex w-full justify-center sm:w-auto items-center gap-2 px-5 py-3 rounded-xl border border-[#DCD6C7] text-[#1C2321] hover:bg-white transition
            dark:border-[#34433D] dark:text-[#E6E1D5] dark:hover:bg-[#1F2A26]"
          >
            <FiArrowLeft />
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;