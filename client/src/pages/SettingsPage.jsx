import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteAccount } from "../api/authApi";
import { SettingsTopbar } from "../components/settings/SettingsTopbar";
import { useOutletContext } from "react-router-dom";

export const SettingsPage = () => {
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const { setIsSidebarOpen } = useOutletContext();

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true);
      setError("");

      const response = await deleteAccount(password);

      alert(response.message);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setIsDeleting(false);
    }
  }; 

  return (
    <>
      <SettingsTopbar setIsSidebarOpen={setIsSidebarOpen} />
       
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* About CashCanvas */}
      <div className="rounded-2xl border border-[#DCD6C7] bg-white p-6 dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1C2321] dark:text-white">
          About CashCanvas
        </h2>

        <p className="mt-4 leading-relaxed text-[#5B6360] dark:text-[#B0B0B0]">
          CashCanvas is a simple and powerful expense tracking platform designed
          to help you manage your money, track spending habits, and build better
          financial awareness.
        </p>

        <p className="mt-4 leading-relaxed text-[#5B6360] dark:text-[#B0B0B0]">
          Thank you for using CashCanvas. We hope it helps you take control of
          your finances and make smarter money decisions every day.
        </p>

        <p className="mt-5 text-sm text-[#7A7A7A] dark:text-[#8C8C8C]">
          Version 1.0.0
        </p>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-200 bg-white p-6 dark:border-[#5B2323] dark:bg-[#1F1F1F]">
        <h2 className="sm:text-xl text-lg font-semibold text-[#C1633D]">
          Danger Zone
        </h2>

        <p className="mt-3 text-[#7A7A7A] dark:text-[#B0B0B0]">
          Deleting your account will permanently remove your profile and all
          your financial data.
        </p>

        <button
          onClick={() => setShowDeleteModal(true)}
          className="mt-5 w-full am:w-auto rounded-xl bg-[#c13d3d] px-5 py-3 font-medium text-white transition-all duration-200 hover:bg-[#9E4B2A]"
        >
          Delete Account
        </button>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 dark:bg-[#1F1F1F]">
            <h2 className="text-2xl font-semibold text-red-500">
              Delete Account
            </h2>

            <p className="mt-3 text-sm text-[#7A7A7A] dark:text-[#B0B0B0]">
              This action cannot be undone.
            </p>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="mt-5 w-full rounded-xl border border-[#DCD6C7] bg-white px-4 py-3 outline-none dark:border-[#3A3A3A] dark:bg-[#262626] dark:text-white"
            />

            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setPassword("");
                  setError("");
                }}
                className="w-full sm:w-auto rounded-xl border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className="w-full sm:w-autorounded-xl bg-red-500 px-4 py-2 text-white"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};