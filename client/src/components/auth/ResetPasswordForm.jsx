import { useState } from "react";

import { Link,useNavigate,useParams } from "react-router-dom";

import { FiEye,FiEyeOff } from "react-icons/fi";

import { resetPassword } from "../../api/authApi";
import toast from "react-hot-toast";


export const ResetPasswordForm = () => {

    const { token } = useParams();

    const navigate = useNavigate();


    const [password,setPassword] = useState("");

    const [confirmPassword,setConfirmPassword] = useState("");


    const [passwordError,setPasswordError] = useState("");

    const [confirmPasswordError,setConfirmPasswordError] = useState("");


    const [showPassword,setShowPassword] = useState(false);

    const [showConfirmPassword,setShowConfirmPassword] = useState(false);


    const [isLoading,setIsLoading] = useState(false);


    const validatePassword = (password)=>{

        const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        return passwordRegex.test(password);

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;


    if(!password.trim()){

        setPasswordError(
            "Password is required."
        );

        isValid = false;

    }

    else if(!validatePassword(password.trim())){

        setPasswordError(

            "Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character."

        );

        isValid = false;

    }


    if(!confirmPassword.trim()){

        setConfirmPasswordError(

            "Please confirm your password."

        );

        isValid = false;

    }

    else if(password !== confirmPassword){

        setConfirmPasswordError(

            "Passwords do not match."

        );

        isValid = false;

    }


    if(!isValid){

        return;

    }


    setIsLoading(true);

    const toastId = toast.loading("Resetting password...");


    try{

        const response = await resetPassword(

            token,
            password,
            confirmPassword

        );

        toast.success(response.message || "Password reset successfully.",{id:toastId});
        navigate("/login");

    }

    catch(error){

        if(error.response){

            toast.error(error.response.data.message,{id:toastId});

        }

        else{

            toast.error("Something went wrong.",{id:toastId});
        }

    }

    finally{

        setIsLoading(false);

    }

};

return (

<div className="w-full max-w-md mx-auto px-4 sm:px-0">

    <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold text-[#1C2321] dark:text-white">
        Reset Password
    </h2>

    <p className="mt-2 mb-8 text-[#5B6360] dark:text-[#B0B0B0] text-sm sm:text-[15px] leading-6">
        Create a new password for your CashCanvas account.
    </p>


    <form
        onSubmit={handleSubmit}
        className="space-y-5"
    >

        {/* Password */}

        <div>

            <label
                htmlFor="password"
                className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360] dark:text-[#B0B0B0]"
            >
                New Password
            </label>


            <div className="relative">

                <input
                    id="password"
                    type={
                        showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={password}
                    onChange={(e)=>{

                        setPassword(
                            e.target.value
                        );

                        setPasswordError("");

                    }}
                    className={`w-full rounded-[3px] border bg-[#FDFCF9] dark:bg-[#262626] px-3 py-2.75 pr-10 text-[14px] text-[#1C2321] dark:text-white outline-none focus:border-[#2D5A4A] placeholder:text-[#9CA3AF] dark:placeholder:text-[#808080]
                    ${
                        passwordError
                        ? "border-red-500"
                        : "border-[#DCD6C7] dark:border-[#3A3A3A]"
                    }`}
                />


                <button
                    type="button"
                    onClick={()=>setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-[#5B6360] dark:text-[#B0B0B0] hover:text-[#2D5A4A]"
                >

                    {
                        showPassword
                        ? <FiEyeOff size={18}/>
                        : <FiEye size={18}/>
                    }

                </button>

            </div>


            {

                passwordError && (

                    <p className="mt-1 text-sm wrap-break-word text-red-500">

                        {passwordError}

                    </p>

                )

            }

        </div>



        {/* Confirm Password */}

        <div>

            <label
                htmlFor="confirmPassword"
                className="block mb-1.5 text-[12px] font-semibold tracking-[0.02em] text-[#5B6360] dark:text-[#B0B0B0]"
            >
                Confirm Password
            </label>


            <div className="relative">

                <input
                    id="confirmPassword"
                    type={
                        showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e)=>{

                        setConfirmPassword(
                            e.target.value
                        );

                        setConfirmPasswordError("");

                    }}
                    className={`w-full rounded-[3px] border bg-[#FDFCF9] dark:bg-[#262626] px-3 py-2.75 pr-10 text-[14px] text-[#1C2321] dark:text-white outline-none focus:border-[#2D5A4A] placeholder:text-[#9CA3AF] dark:placeholder:text-[#808080]
                    ${
                        confirmPasswordError
                        ? "border-red-500"
                        : "border-[#DCD6C7] dark:border-[#3A3A3A]"
                    }`}
                />


                <button
                    type="button"
                    onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-[#5B6360] dark:text-[#B0B0B0] hover:text-[#2D5A4A]"
                >

                    {
                        showConfirmPassword
                        ? <FiEyeOff size={18}/>
                        : <FiEye size={18}/>
                    }

                </button>

            </div>


            {

                confirmPasswordError && (

                    <p className="mt-1 text-sm wrap-break-word text-red-500">

                        {confirmPasswordError}

                    </p>

                )

            }

        </div>

        {/* Button */}

        <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-[3px] py-3 text-[14px] font-semibold text-[#F3F0E6] transition-colors
            ${
                isLoading
                ? "bg-[#6B8A7A] cursor-not-allowed"
                : "bg-[#2D5A4A] hover:bg-[#23483b]"
            }`}
        >

            {
                isLoading
                ? "Resetting..."
                : "Reset Password"
            }

        </button>


    </form>


    <div className="mt-6 text-center text-sm sm:text-[14px] text-[#5B6360] dark:text-[#B0B0B0]">

        Remembered it after all?{" "}

        <Link
            to="/login"
            className="font-semibold text-[#2D5A4A] dark:text-[#3E8E7E] hover:underline"
        >

            Back to Login

        </Link>

    </div>

</div>

);

};