import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/generateTokens.js";

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

 