import express from "express"
import {createOffer,getOffer,deleteOffer,updateOffer } from "../controllers/offer.js"
const router=express.Router()
router.post("/createoffer",createOffer)
router.get("/getoffer",getOffer)
router.delete("/deleteoffer/:id",deleteOffer)
router.put("/updateoffer/:id",updateOffer)
 
export default router 