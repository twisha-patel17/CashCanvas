import { FiMenu } from "react-icons/fi";

export const ProfileTopbar = ({ setIsSidebarOpen, }) => {
  return (
    <div
      className="
      mb-8
      flex
      items-center
      gap-4
      "
    >
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="
        text-2xl
        text-[#1C2321]
        dark:text-white
        lg:hidden
        "
      >
        <FiMenu />
      </button>

      <h1
        className="
        text-3xl
        font-bold
        text-[#1C2321]
        dark:text-white
        "
      >
        Profile
      </h1>
    </div>
  );
};