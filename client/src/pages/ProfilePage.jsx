import { useEffect, useState } from "react";
import { getProfile } from "../api/profileApi";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="p-8 text-center text-[#7A7A7A]">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-8">
      {/* Profile Header */}
      <div className="rounded-2xl border border-[#DCD6C7] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2D5A4A] text-3xl font-semibold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-[#1C2321]">
              {user.name}
            </h1>

            <p className="mt-1 text-[#7A7A7A]">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="rounded-2xl border border-[#DCD6C7] bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-[#1C2321]">
          Account Information
        </h2>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-medium text-[#7A7A7A]">
              Name
            </p>

            <p className="mt-1 text-lg text-[#1C2321]">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[#7A7A7A]">
              Email
            </p>

            <p className="mt-1 text-lg text-[#1C2321]">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[#7A7A7A]">
              Joined On
            </p>

            <p className="mt-1 text-lg text-[#1C2321]">
              {new Date(user.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="rounded-xl bg-[#C1633D] px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        Logout
      </button>
    </div>
  );
};