import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/generateTokens.js";
import transporter from "../utils/mailer.js";
import Transaction from "../models/Transaction.js";
import Category from "../models/Category.js";


export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter all required fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password, rememberMe=false } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter all required fields",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

  const accessToken = generateAccessToken(

            user._id

        );


        const refreshToken = generateRefreshToken(

            user._id,

            rememberMe

        );


        user.refreshToken = refreshToken;

        await user.save();

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const refreshAccessToken = async (req,res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(401).json({
                message:
                "Refresh token required",
            });
        }
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET
        );
        const user = await User.findById(
            decoded.id
        );
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({
                message:
                "Invalid refresh token",
            });
        }
        const accessToken = generateAccessToken(user._id);
        return res.status(200).json({
            accessToken,
        });
    }
    catch (error) {
        return res.status(403).json({
            message:
            "Refresh token expired",
        });
    }
};
export const logoutUser = async (req,res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(400).json({
                message:
                "Refresh token required",
            });
        }
        const user = await User.findOne({
            refreshToken,
        });
        if (user) {
            user.refreshToken = null;
            await user.save();
        }
        return res.status(200).json({
            message:
            "Logged out successfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message:
            "Something went wrong",
        });
    }
};
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "Email is required",
            });
        }
        const user = await User.findOne({
            email,
        });
        if (!user) {
            return res.status(200).json({
                message: "If that email exists, a reset link has been sent.",
            });
        }
        const resetToken = crypto
            .randomBytes(32)
            .toString("hex");
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires =
            Date.now() + 15 * 60 * 1000;
        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        await user.save();

        await transporter.sendMail({
            from: `"CashCanvas" <twipatel2006@gmail.com>`,
            to: user.email,
            subject: "Reset your CashCanvas password",
            html: `
                <p>Hi ${user.name},</p>
                <p>Click the link below to reset your password. This link expires in 15 minutes.</p>
                <p><a href="${resetLink}">${resetLink}</a></p>
                <p>If you didn't request this, you can safely ignore this email.</p>
            `,
        });

        return res.status(200).json({
            message:
                "Password reset link sent successfully.",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message:
                "Something went wrong",
        });
    }
};
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
      return res.status(400).json({
        message: "Please enter all required fields.",
      });
    }
    if(!token) {
      return res.status(400).json({
        message: "Reset Token is required.",
      })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match.",
      });
    }
    const user = await User.findOne({
      resetPasswordToken: token,
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid reset token.",
      });
    }
    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({
        message: "Reset token has expired.",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );
    user.password = hashedPassword;
    user.refreshToken = null;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();
    return res.status(200).json({
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Current password is incorrect",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      newPassword,
      salt
    );

    user.password = hashedPassword;
    user.refreshToken = null;

    await user.save();

    return res.status(200).json({
      message:
        "Password changed successfully. Please login again.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        message: "Password is required.",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password.",
      });
    }

    await Transaction.deleteMany({
      user: req.user.id,
    });

    await Category.deleteMany({
      user: req.user.id,
    });

    await User.findByIdAndDelete(req.user.id);

    return res.status(200).json({
      message: "Account deleted successfully.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

 