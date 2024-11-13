import express from "express";
import { addUser, getUserById } from "../controllers/userController";

const router = express.Router();

router.post("/addUser", addUser);
router.get("/getUserById/:id", getUserById);

export default router;
