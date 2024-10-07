import express from "express"
import { createblog,getblog,deletblog,updateblog } from "../controllers/blog.js"
const router=express.Router()
router.post("/createblog",createblog)
router.get("/getblog",getblog)
router.delete("/deleteblog/:id",deletblog)
router.put("/updateblog/:id",updateblog)
export default router