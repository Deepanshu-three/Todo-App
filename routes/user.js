import express from "express"
import { getMyprofile, getAllUsers, login, register, logout } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();




router.get("/all", getAllUsers)

router.post("/register",register)

router.post("/login",login)

router.get("/logout",logout)

router.get("/me",isAuthenticated, getMyprofile)

export default router