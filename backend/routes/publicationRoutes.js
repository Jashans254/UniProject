import express from "express";
import { newPublication , deletePublication } from "../controllers/publicationControllers.js";
import { isAuth } from "../middleware/isAuth.js";
const router = express.Router();

router.post("/new" ,isAuth, newPublication)
router.delete("/:id" ,isAuth, deletePublication)
export default router