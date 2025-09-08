import express from "express";
import { getProfile, updateProfileController, } from "../controllers/controller.Profiles"
import { asyncHandler, isToken } from "../middlewares/middleware.Auth";

const router = express.Router();

router.get('/', asyncHandler(isToken), asyncHandler(getProfile));
router.post('/', asyncHandler(isToken), asyncHandler(updateProfileController));

export default router;