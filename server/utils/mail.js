import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({

    service:"gmail",

    port:587,

    secure:false,

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