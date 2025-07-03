import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { APIResponse } from "../utils";

const { JWT_SECRET } = env;

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
