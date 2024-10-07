import Blog from "../models/blog.js";
import deleteFile from "./deletefile.js";


const createblog = async (req, res) => {
    try {
      const newItservice = await Blog.create(req.body);
      res.json(newItservice);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getblog=async(req,res)=>{
    try{
      const getblog=await Blog.find()
      res.json(getblog)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deletblog=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteBlogs=await Blog.findById(id);
      const filePath=deleteBlogs.image
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)

      const deleteblog=await Blog.findByIdAndDelete(id);
      res.json(deleteblog)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateblog=async(req,res)=>{
  const {id}=req.params;
  try{
    const updablog=await Blog.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updablog)
  }catch(error)
  {
    throw new Error(error)
  }
  }
  export {createblog,getblog,deletblog,updateblog}