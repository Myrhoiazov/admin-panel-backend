import express from "express";
import { login, logout, refresh, registration } from "../controllers/controller.Auth";
import { asyncHandler } from "../middlewares/middleware.Auth"
import { validateSchema } from "../middlewares/middleware.ValidateSchema";
import { loginSchema } from "../schemas/schema.auth";

const router = express.Router();

router.post("/register", validateSchema(loginSchema), asyncHandler(registration));
router.post("/login", asyncHandler(login));
router.get("/logout", asyncHandler(logout));
router.get('/refresh', asyncHandler(refresh));

export default router