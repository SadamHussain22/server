import express from "express"
import{createAboutus,getAboutus,deleteAboutus,updateAboutus} from "../controllers/aboutus.js"
const router=express.Router();

router.post("/createaboutus",createAboutus)
router.get("/getaboutus",getAboutus)
router.put("/updateaboutus/:id",updateAboutus)
router.delete("/deleteaboutus/:id",deleteAboutus)
export default router 
  
       