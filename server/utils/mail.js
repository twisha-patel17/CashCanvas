import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("EMAIL =",process.env.EMAIL_USER);

console.log("PASSWORD =",process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({

    service:"gmail",

    auth:{

        user:process.env.EMAIL_USER,

        pass:process.env.EMAIL_PASS,

    },

});


transporter.verify((error,success)=>{

    if(error){

        console.log(error);

    }

    else{

        console.log("MAIL SERVER READY");

    }

});

export default transporter;