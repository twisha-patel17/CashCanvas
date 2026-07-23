import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { changePassword } from "../../api/authApi";
import toast from "react-hot-toast";

export const ChangePasswordForm = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError(
        "Password must contain uppercase, lowercase, number and special character."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Updating password...");

    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
      });

      toast.success(response.message || "Password updated successfully.", { id: toastId });

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, { id: toastId });
      } else {
        toast.error("Something went wrong.", {id:toastId});
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl sm:text-4xl font-bold font-['Cormorant_Garamond'] text-[#1C2321] dark:text-white">
        Change Password
      </h2>

      <p className="mt-2 mb-8 text-sm leading-6 sm:text-[15px] text-[#5B6360] dark:text-[#B0B0B0]">
        Update your account password securely.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold tracking-[0.02em] dark:text-[#B0B0B0] text-[#5B6360]">
            Current Password
          </label>

          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9]  px-3 py-2.75 text-[14px] text-[#1C2321] pr-10 outline-none dark:border-[#3A3A3A] dark:bg-[#262626] dark:text-white"
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrentPassword(!showCurrentPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-white"
            >
              {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold tracking-[0.02em] dark:text-[#B0B0B0] text-[#5B6360]">
            New Password
          </label>

          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9]  px-3 py-2.75 text-[14px] text-[#1C2321] pr-10 outline-none dark:border-[#3A3A3A] dark:bg-[#262626] dark:text-white"
            />

            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-white"
            >
              {showNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold tracking-[0.02em] dark:text-[#B0B0B0] text-[#5B6360]">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-[3px] border border-[#DCD6C7] bg-[#FDFCF9]  px-3 py-2.75 text-[14px] text-[#1C2321] pr-10 outline-none dark:border-[#3A3A3A] dark:bg-[#262626] dark:text-white"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-white"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-sm mt-1 wrap-break-word text-red-500">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/settings")}
            className="w-full rounded-[3px] border border-[#DCD6C7] py-3 font-semibold text-[#1C2321] transition-colors hover:bg-[#ECE8DD] dark:border-[#3A3A3A] dark:text-white dark:hover:bg-[#2A2A2A]">Cancel</button>


            <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-[3px] bg-[#2D5A4A] py-3 font-semibold text-[14px] text-[#F3F0E6] transition-colors ${isLoading ? "cursor-not-allowed bg-[#6B8A7A]" : "bg-[#2D5A4A] hover:bg-[#23483B]"}`}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        </div>
      </form>
    </div>
  );
};