import express from "express";
import multer from 'multer';
import path from 'path';
import { asyncHandler, isToken } from "../middlewares/middleware.Auth";
import { createProcedureController, fetchAllProceduresController, getProcedureByIdController } from "../controllers/controller.Procedures";

const router = express.Router();

const publicPath = path.resolve(__dirname, '../../', 'public/upload');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, publicPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
    
const upload = multer({ storage: storage });

router.get("/", asyncHandler(isToken), asyncHandler(fetchAllProceduresController));
router.get("/:id", asyncHandler(isToken), asyncHandler(getProcedureByIdController));
router.post("/", asyncHandler(isToken), upload.single('image'), asyncHandler(createProcedureController));

export default router;
