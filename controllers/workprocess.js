import WorkProcess from "../models/workProcess.js";
import deleteFile from "./deletefile.js";

const createWorkProcess = async (req, res) => {
    try {
      const newWorkProcess = await WorkProcess.create(req.body);
      res.json(newWorkProcess);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getWorkProcess=async(req,res)=>{
    try{
      const getWorkProcess=await WorkProcess.find()
      res.json(getWorkProcess)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deleteWorkProcess=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteProg=await WorkProcess.findById(id);

      if (deleteProg && deleteProg.process && Array.isArray(deleteProg.process)) {
        // Loop through the process array
        for (const processItem of deleteProg.process) {
          const filePath = processItem.image; // Assuming the image path is stored in processItem.image
      
          if (filePath) {
            console.log("Deleting file:", filePath);
            deleteFile(filePath);  // Call your deleteFile function for each image
          }
        }
      } else {
        console.log('No process data found or process is not an array');
      }

       
      const deleteWorkProcess=await WorkProcess.findByIdAndDelete(id);
      res.json(deleteWorkProcess)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateWorkProcess=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateWorkProcess=await WorkProcess.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateWorkProcess)
  }catch(error)
  {
    throw new Error(error)
  }
  }
  export {createWorkProcess,getWorkProcess,deleteWorkProcess,updateWorkProcess}