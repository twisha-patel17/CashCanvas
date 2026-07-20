import { BrandingPanel } from "../components/auth/BrandingPanel";
import { LoginForm } from "../components/auth/LoginForm";

function LoginPage() {
  return (
<div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF]  dark:bg-[#121212]">
  <BrandingPanel
  quote="The budget is just a plan telling your money where to go — instead of
  wondering where it went."
  author="— Every good ledger, eventually"
   />
  <LoginForm />
</div>
  );
}

export default LoginPage;