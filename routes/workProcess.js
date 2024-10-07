import express from "express"
import {createWorkProcess,getWorkProcess,deleteWorkProcess,updateWorkProcess } from "../controllers/workprocess.js"
const router=express.Router()
router.post("/createworkprocess",createWorkProcess)
router.get("/getworkprocess",getWorkProcess)
router.delete("/deleteworkprocess/:id",deleteWorkProcess)
router.put("/updateworkprocess/:id",updateWorkProcess)
 
export default router 