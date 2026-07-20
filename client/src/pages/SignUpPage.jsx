import { SignUpForm } from "../components/auth/SignUpForm"
import { BrandingPanel } from "../components/auth/BrandingPanel"

export const SignUpPage = () => {
  return (
     <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[52%_48%] bg-[#F7F5EF] dark:bg-[#121212]">
    
          <BrandingPanel
            quote="Track it for a month, and the leaks find themselves."
            author="— Every good ledger, eventually"
          />
    
          {/* Right Panel */}
          <div className="flex items-center justify-center px-8">
            <SignUpForm />
          </div>
    
        </div>
  )
}
