import { ResetPasswordForm } from "../components/auth/ResetPasswordForm";
import { BrandingPanel } from "../components/auth/BrandingPanel";

export const ResetPasswordPage = () => {

    return(

        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF]  dark:bg-[#121212]">

            <BrandingPanel
                quote="Some entries deserve a fresh beginning."
                author="— CashCanvas"
            />

            <div className="flex items-center justify-center px-8">

                <ResetPasswordForm />

            </div>

        </div>

    );

};