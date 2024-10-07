import express from "express"
import { createBsolution,getBsolution,deleteBsolution,updateBsolution } from "../controllers/bestSolution.js"
const router=express.Router()
router.post("/createbsolution",createBsolution)
router.get("/getbsolution",getBsolution)
router.delete("/deletebsolution/:id",deleteBsolution)
router.put("/updatebsolution/:id",updateBsolution)
export default router 