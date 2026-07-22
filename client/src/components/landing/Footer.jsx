import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="
      border-t
      border-[#DCD6C7]
      bg-[#F7F5EF]
      px-4
      py-12
      dark:border-[#262626]
      dark:bg-[#121212]
      sm:px-[6%]
      "
    >
      <div
        className="
        mx-auto
        grid
        grid-cols-1
        gap-10
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >
        {/* Branding */}

        <div>
          <h2
            className="
            font-fraunces
            text-3xl
            font-semibold
            text-[#1C2321]
            dark:text-white
            "
          >
            CashCanvas
          </h2>

          <p
            className="
            mt-3
            text-sm
            leading-relaxed
            text-[#5B6360]
            dark:text-[#B0B0B0]
            "
          >
            Track expenses, plan budgets and
            understand your financial habits
            with ease.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3
            className="
            mb-4
            text-lg
            font-semibold
            text-[#1C2321]
            dark:text-white
            "
          >
            Quick Links
          </h3>

          <div className="space-y-3">
            <Link
              to="/login"
              className="
              block
              text-[#5B6360]
              transition
              hover:text-[#2D5A4A]
              dark:text-[#B0B0B0]
              dark:hover:text-[#3E8E7E]
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
              block
              text-[#5B6360]
              transition
              hover:text-[#2D5A4A]
              dark:text-[#B0B0B0]
              dark:hover:text-[#3E8E7E]
              "
            >
              Sign Up
            </Link>

            <Link
              to="/dashboard"
              className="
              block
              text-[#5B6360]
              transition
              hover:text-[#2D5A4A]
              dark:text-[#B0B0B0]
              dark:hover:text-[#3E8E7E]
              "
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Features */}

        <div>
          <h3
            className="
            mb-4
            text-lg
            font-semibold
            text-[#1C2321]
            dark:text-white
            "
          >
            Features
          </h3>

          <div className="space-y-3">
            <p className="text-[#5B6360] dark:text-[#B0B0B0]">
              Expense Tracking
            </p>

            <p className="text-[#5B6360] dark:text-[#B0B0B0]">
              Budget Planning
            </p>

            <p className="text-[#5B6360] dark:text-[#B0B0B0]">
              Analytics
            </p>

            <p className="text-[#5B6360] dark:text-[#B0B0B0]">
              Monthly Reports
            </p>
          </div>
        </div>

        {/* About */}

        <div>
          <h3
            className="
            mb-4
            text-lg
            font-semibold
            text-[#1C2321]
            dark:text-white
            "
          >
            Built With
          </h3>

          <p
            className="
            text-sm
            leading-relaxed
            text-[#5B6360]
            dark:text-[#B0B0B0]
            "
          >
            CashCanvas is built using the
            MERN Stack with a focus on clean
            design, simplicity and financial
            awareness.
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <div
        className="
        mt-10
        border-t
        border-[#DCD6C7]
        pt-6
        text-center
        dark:border-[#262626]
        "
      >
        <p
          className="
          text-sm
          text-[#5B6360]
          dark:text-[#B0B0B0]
          "
        >
          © 2026 CashCanvas. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};