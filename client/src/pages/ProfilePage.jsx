import { useEffect, useState } from "react";
import { getProfile } from "../api/profileApi";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

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
  

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    try{
      await api.post("/auth/logout", { refreshToken });
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  };

  if (!user) {
    return (
      <div className="p-8 text-center text-[#7A7A7A] dark:text-[#B0B0B0]">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-8">
      {/* Profile Header */}
      <div className="rounded-2xl border border-[#DCD6C7] dark:border-[#3A3A3A] bg-white dark:bg-[#1F1F1F] p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2D5A4A] text-3xl font-semibold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-[#1C2321] dark:text-white">
              {user.name}
            </h1>

            <p className="mt-1 text-[#7A7A7A] dark:text-[#B0B0B0]">
              {user.email}
            </p>
          </div>
        </div>
      </div> 

      {/* Account Information */}
      <div className="rounded-2xl border border-[#DCD6C7] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-[#1C2321] dark:text-white">
          Account Information
        </h2>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-medium text-[#7A7A7A]">
              Name
            </p>

            <p className="mt-1 text-lg text-[#1C2321]  dark:text-white">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[#7A7A7A] dark:text-[#B0B0B0]">
              Email
            </p>

            <p className="mt-1 text-lg text-[#1C2321]  dark:text-white">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[#7A7A7A] dark:text-[#B0B0B0]">
              Joined On
            </p>

            <p className="mt-1 text-lg text-[#1C2321]  dark:text-white">
              {new Date(user.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="rounded-xl bg-[#C1633D] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#A94F2B]"
      >
        Logout
      </button>
    </div>
  );
};