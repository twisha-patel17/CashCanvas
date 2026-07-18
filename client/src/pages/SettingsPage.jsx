export const SettingsPage = () => {
  return (
    <div className="space-y-6 p-8">

      {/* Appearance */}
      <div
        className="
          rounded-2xl
          border border-[#DCD6C7]
          bg-white
          p-6
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321]
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
            <p className="font-medium text-[#1C2321]">
              Dark Mode
            </p>

            <p className="text-sm text-[#7A7A7A]">
              Switch between light and dark theme
            </p>
          </div>


          <button
            className="
              h-7
              w-14
              rounded-full
              bg-[#2D5A4A]
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
          border border-[#DCD6C7]
          bg-white
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321]
          "
        >
          Currency
        </h2>


        <select
          className="
            mt-4
            rounded-xl
            border
            border-[#DCD6C7]
            bg-white
            px-4
            py-3
            text-[#1C2321]
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
          border border-[#DCD6C7]
          bg-white
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-[#1C2321]
          "
        >
          About CashCanvas
        </h2>


        <p
          className="
            mt-4
            leading-relaxed
            text-[#5B6360]
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
            text-[#5B6360]
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
            text-[#7A7A7A]
          "
        >
          Version 1.0.0
        </p>

      </div>

      {/* Danger Zone */}
<div
  className="
    rounded-2xl
    border border-red-200
    bg-white
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
      text-[#7A7A7A]
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
      transition
      hover:opacity-90
    "
  >
    Delete Account
  </button>


</div>


    </div>
  );
};