import express from "express"
import { createSlider,getSlider,deleteSlider,updateSlider,toggleShow } from "../controllers/slider.js"
const router=express.Router()
router.post("/createslider",createSlider)
router.get("/getslider",getSlider)
router.delete("/deleteslider/:id",deleteSlider)
router.put("/updateslider/:id",updateSlider)
router.put("/updateshow/:id",toggleShow)
export default router 