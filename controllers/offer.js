import Offer from "../models/offer.js";
import deleteFile from "./deletefile.js";

const createOffer = async (req, res) => {
    try {
      const newOffer = await Offer.create(req.body);
      res.json(newOffer);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getOffer=async(req,res)=>{
    try{
      const getOffer=await Offer.find()
      res.json(getOffer)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deleteOffer=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteOffers=await Offer.findById(id);

      if (deleteOffers && deleteOffers.tech && Array.isArray(deleteOffers.tech)) {
        // Loop through the process array
        for (const offerItem of deleteOffers.tech) {
          const filePath = offerItem.image; // Assuming the image path is stored in processItem.image
      
          if (filePath) {
            console.log("Deleting file:", filePath);
            deleteFile(filePath);  // Call your deleteFile function for each image
          }
        }
      } else {
        console.log('No process data found or process is not an array');
      }

      if (deleteOffers && deleteOffers.image && Array.isArray(deleteOffers.image)) {
        // Loop through the process array
        for (const offerItem of deleteOffers.image) {
          const filePath = offerItem.image; // Assuming the image path is stored in processItem.image
      
          if (filePath) {
            console.log("Deleting file:", filePath);
            deleteFile(filePath);  // Call your deleteFile function for each image
          }
        }
      } else {
        console.log('No process data found or process is not an array');
      }
      const deleteOffer=await Offer.findByIdAndDelete(id);
      res.json(deleteOffer)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateOffer=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateOffer=await Offer.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateOffer)
  }catch(error)
  {
    throw new Error(error)
  }
  }
  export {createOffer,getOffer,deleteOffer,updateOffer}