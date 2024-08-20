import express from 'express'
import{  isAuth } from '../middleware/isAuth.js';
import { myProfile , getAllUsers , userProfile } from '../controllers/userControllers.js';
const router = express.Router();
router.get("/me" , isAuth , myProfile)
router.get("/all" , isAuth , getAllUsers)
router.get("/:id" , isAuth , userProfile)

export default router