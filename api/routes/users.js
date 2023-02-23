import {getUsers, addUser, updateUser, deleteUser} from "../controllers/user.js";
import express from "express"

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


export default router;