import path from 'path';
import fs from "fs"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const deleteFile = (filePath) => { 
    if (!filePath) {
      console.log( 'File path is required' );
    }
  
    const absolutePath = path.join(__dirname, '..', filePath); // Adjust path for your project structure
  
    // Check if file exists
    fs.stat(absolutePath, (err) => {
      if (err) {
        console.log( 'File does not exist' );
      }
  
      // Delete the file
      fs.unlink(absolutePath, (err) => {
        if (err) {
           console.log( 'Error deleting file' );
        }
      });
      console.log('File deleted successfully')

    });
  };
  export default deleteFile