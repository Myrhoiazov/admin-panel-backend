import express from "express";
import { createUserController, deleteUserByIdController, gettAllUsersController, getUserByIdController, updateUserController } from "../controllers/controller.Users";
import { asyncHandler, isAuthenticated, isOwner, isToken } from "../middlewares/middleware.Auth";

const router = express.Router();

router.get("/", asyncHandler(isAuthenticated), asyncHandler(gettAllUsersController));
router.post("/", asyncHandler(isToken), asyncHandler(createUserController));
router.get("/:id", asyncHandler(isToken), asyncHandler(getUserByIdController));
router.delete("/:id", asyncHandler(isAuthenticated), asyncHandler(deleteUserByIdController));
router.patch("/:id", asyncHandler(isAuthenticated), asyncHandler(isOwner), asyncHandler(updateUserController));

export default router;