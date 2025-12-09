import { Router } from "express";
import { loginUser, registerUser,logoutUser, refreshAccessToken, changeCureentPassword, getCurrentUser } from "../controllers/user.controllers.js";
import { varifyJwt } from "../middlewares/auth.middleware.js";
import { verify } from "jsonwebtoken";
const router = Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
//secured ROutes
router.route("/logout").post(varifyJwt,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(varifyJwt,changeCureentPassword)
router.route("/current-user").get(varifyJwt,getCurrentUser);






export default router