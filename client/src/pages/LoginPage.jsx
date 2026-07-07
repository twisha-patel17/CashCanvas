import { BrandingPanel } from "../components/auth/BrandingPanel";
import { LoginForm } from "../components/auth/LoginForm";

function LoginPage() {
  return (
<div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF]">
  <BrandingPanel />
  <LoginForm />
</div>
  );
}

export default LoginPage;