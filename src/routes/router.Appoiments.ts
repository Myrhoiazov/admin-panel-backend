import express from "express";
import multer from 'multer';
import path from 'path';
import { asyncHandler, isToken } from "../middlewares/middleware.Auth";
import { createAppoimentController, getAllAppoimentsontroller } from "../controllers/controller.Appoiments";

const publicPath = path.resolve(__dirname, '../../', 'public/upload');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, publicPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const router = express.Router();
const upload = multer({ storage: storage });

router.get("/", asyncHandler(isToken), asyncHandler(getAllAppoimentsontroller));
// router.get("/:id", asyncHandler(isToken), asyncHandler(getClientByIdController));
// router.delete("/:id", asyncHandler(isToken), asyncHandler(deleteClientByIdController));
router.post("/", asyncHandler(isToken), upload.single('image'), asyncHandler(createAppoimentController));

export default router;