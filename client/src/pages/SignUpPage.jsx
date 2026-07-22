import { SignUpForm } from "../components/auth/SignUpForm"
import { BrandingPanel } from "../components/auth/BrandingPanel"

export const SignUpPage = () => {
  return (
     <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF] dark:bg-[#121212]">
    
          <div className="hidden lg:block">
    <BrandingPanel
        quote="Track it for a month, and the leaks find themselves."
        author="— Every good ledger, eventually"
    />
</div>
    
          {/* Right Panel */}
          <div className="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-8">
            <SignUpForm />
          </div>
    
        </div>
  )
}
