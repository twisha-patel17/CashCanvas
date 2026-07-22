import { ResetPasswordForm } from "../components/auth/ResetPasswordForm";
import { BrandingPanel } from "../components/auth/BrandingPanel";

export const ResetPasswordPage = () => {

    return(

        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF]  dark:bg-[#121212]">

            <div className="hidden lg:block">

            <BrandingPanel
            quote="Some entries deserve a fresh beginning."
            author="— CashCanvas"
            />

        </div>

            <div className="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-8 lg:items-center">

                <ResetPasswordForm />

            </div>

        </div>

    );

};