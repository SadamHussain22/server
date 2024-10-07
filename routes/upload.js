
// routes/uploadRoute.js
import express from "express"
import {uploadFile} from "../controllers/upload.js"
const router = express.Router();

// Define the route for file upload
router.post('/upload', uploadFile);

export default router
