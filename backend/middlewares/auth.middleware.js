import jwt from "jsonwebtoken";
import { APIResponse } from "../utils/response.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleWare = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) return APIResponse(res, null, "You must be signed in", 401);

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET);

    res.locals.user = decoded;
    next();
  } catch (err) {
    return APIResponse(res, null, "Invalid token", 401);
  }
};
