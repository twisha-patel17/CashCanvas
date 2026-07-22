import { ChangePasswordForm } from "../components/auth/ChangePasswordForm";

export const ChangePasswordPage = () => {
  return (
    <div
      className="
      min-h-screen
      bg-[#F7F5EF]
      dark:bg-[#121212]
      flex
      justify-center
      px-6
      py-10
      sm:px-8
      lg:items-center
      "
    >
      <ChangePasswordForm />
    </div>
  );
};