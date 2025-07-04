import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { APIResponse } from "../utils/response.js";

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      console.log("ENV EMAIL:", ADMIN_EMAIL);
      console.log("ENV PASSWORD:", ADMIN_PASSWORD);
      return APIResponse(res, null, "Wrong email or password", 400);
    }

    const accessToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    return APIResponse(res, null, "You are signed in", 200);
  },
  logout: async (request, response) => {
    response.clearCookie("accessToken");
    APIResponse(response, null, "You are signed out", 200);
  },
};

export default authController;
