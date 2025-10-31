import { User } from "../models/userModel.js";

export const handleLogin = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPass = req.body.password;

    if (!userEmail || !userPass) {
      return res.status(400).json({
        success: false,
        info: "Please enter both email and password!",
      });
    }

    const existingUser = await User.findOne({ email: userEmail });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        info: "User not found. Kindly register first!",
      });
    }

    if (userPass !== existingUser.password) {
      return res.status(401).json({
        success: false,
        info: "Incorrect password! Try again.",
      });
    }

    // Unique success message here
    res.status(200).json({
      success: true,
      message: "Access granted ", 
    });
  } catch (err) {
    console.log("Error during login:", err.message);
    res.status(500).json({
      success: false,
      info: "Server error, please try again later!",
    });
  }
};