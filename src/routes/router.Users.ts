import express from "express";
import { deleteUserController, gettAllUsersController, getUserByIdController, updateUserController } from "../controllers/controller.Users";
import { asyncHandler, isAuthenticated, isOwner, isToken } from "../middlewares/middleware.Auth";

const router = express.Router();

router.get("/", asyncHandler(isAuthenticated), asyncHandler(gettAllUsersController));
router.get("/:id", asyncHandler(isToken), asyncHandler(getUserByIdController));
router.delete("/:id", asyncHandler(isAuthenticated), asyncHandler(isOwner), asyncHandler(deleteUserController));
router.patch("/:id", asyncHandler(isAuthenticated), asyncHandler(isOwner), asyncHandler(updateUserController));

export default router;