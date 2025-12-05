import  apiError  from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";
export const varifyJwt = asyncHandler(async (req, res, next) => {
    try {
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace(/^Bearer\s*/i, "")
      console.log("Token received:", token)
      if (!token) {
            throw new apiError(401, "Unauthorixed Request")
        }
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decode?._id).select("-password -refreshToken")
        if (!user) {
            throw new apiError(401, "Invalid Access Token")
        }
        req.user = user;
        next();
        
    } catch (error) {
        throw new apiError(401,error?.message || "Invalid Access token")
    }
})