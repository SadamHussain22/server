 import express from "express"
 import { createItServices,getItServices,deleteItService,updateItService } from "../controllers/itServices.js"
const router=express.Router()
router.post("/createitservice",createItServices)
router.get("/getitservice",getItServices)
router.delete("/deleteitservice/:id",deleteItService)
router.put("/updateitservice/:id",updateItService)
export default router 