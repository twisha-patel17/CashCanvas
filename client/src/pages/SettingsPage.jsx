export const SettingsPage = () => {
  return (
    <div className="space-y-6 p-8">

      {/* Appearance */}
      <div
        className="
          rounded-2xl
          border border-[#DCD6C7] dark:border-[#3A3A3A]
          bg-white dark:bg-[#1F1F1F]
          p-6
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321] dark:text-white
          "
        >
          Appearance
        </h2>


        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >

          <div>
            <p className="font-medium text-[#1C2321] dark:text-white">
              Dark Mode
            </p>

            <p className="text-sm text-[#7A7A7A] dark:text-[#B0B0B0]">
              Switch between light and dark theme
            </p>
          </div>


          <button
            className="
              h-7
              w-14
              rounded-full
              bg-[#2D5A4A] dark:bg-[#3A3A3A]
              p-1
            "
          >
            <div
              className="
                h-5
                w-5
                rounded-full
                bg-white
              "
            />
          </button>

        </div>

      </div>



      {/* Currency */}
      <div
        className="
          rounded-2xl
          border border-[#DCD6C7] dark:border-[#3A3A3A]
          bg-white dark:bg-[#1F1F1F]
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321] dark:text-white
          "
        >
          Currency
        </h2>


        <select
          className="
            mt-4
            rounded-xl
            border
            border-[#DCD6C7] dark:border-[#3A3A3A]
            bg-white dark:bg-[#2A2A2A]
            px-4
            py-3
            text-[#1C2321] dark:text-white
            outline-none
          "
        >
          <option>₹ INR</option>
          <option>$ USD</option>
          <option>€ EUR</option>
        </select>

      </div>



      {/* About CashCanvas */}
      <div
        className="
          rounded-2xl
          border border-[#DCD6C7] dark:border-[#3A3A3A]
          bg-white dark:bg-[#1F1F1F]
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321] dark:text-white
          "
        >
          About CashCanvas
        </h2>


        <p
          className="
            mt-4
            leading-relaxed
            text-[#5B6360] dark:text-[#B0B0B0]
          "
        >
          CashCanvas is a simple and powerful expense
          tracking platform designed to help you manage
          your money, track spending habits, and build
          better financial awareness.
        </p>


        <p
          className="
            mt-4
            leading-relaxed
            text-[#5B6360] dark:text-[#B0B0B0]
          "
        >
          Thank you for using CashCanvas. We hope it helps
          you take control of your finances and make
          smarter money decisions every day.
        </p>


        <p
          className="
            mt-5
            text-sm
            text-[#7A7A7A] dark:text-[#8C8C8C]
          "
        >
          Version 1.0.0
        </p>

      </div>

      {/* Danger Zone */}
<div
  className="
    rounded-2xl
    border border-red-200 dark:border-[#5B2323]
    bg-white dark:bg-[#1F1F1F]
    p-6
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-[#C1633D]
    "
  >
    Danger Zone
  </h2>


  <p
    className="
      mt-3
      text-[#7A7A7A] dark:text-[#B0B0B0]
    "
  >
    Deleting your account will permanently remove your
    profile and all your financial data.
  </p>


  <button
    className="
      mt-5
      rounded-xl
      bg-[#c13d3d]
      px-5
      py-3
      font-medium
      text-white
      transition-all
      duration-200
      hover:bg-[#9E4B2A]
    "
  >
    Delete Account
  </button>


</div>


    </div>
  );
};