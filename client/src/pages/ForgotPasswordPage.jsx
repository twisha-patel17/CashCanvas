import { BrandingPanel } from "../components/auth/BrandingPanel";
import { ForgotPasswordForm } from "../components/auth/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF] dark:bg-[#121212]">

      <BrandingPanel
        quote="Every ledger gets misplaced sometimes — the entries are still safe."
        author="— Every good ledger, eventually"
      />

      {/* Right Panel */}
      <div className="flex items-center justify-center px-8">
        <ForgotPasswordForm />
      </div>

    </div>
  );
};