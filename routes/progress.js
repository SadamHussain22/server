import express from "express"
import { createProgress,getProgress,deleteProgress,updateProgress } from "../controllers/progress.js"
const router=express.Router()
router.post("/createprogress",createProgress)
router.get("/getprogress",getProgress)
router.delete("/deleteprogress/:id",deleteProgress)
router.put("/updateprogress/:id",updateProgress)
export default router 