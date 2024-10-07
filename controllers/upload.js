// controllers/uploadController.js

import multer from 'multer';
import path from 'path';
import fs from "fs"
// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Directory where the file will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Save file with a unique name
  }
});

const upload = multer({ storage: storage }).single('image');

// Create 'uploads' folder if it doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Controller to handle the file upload
const uploadFile = (req, res) => {
  upload(req, res, (err) => { 
    if (err) {
      return res.status(500).json({ error: 'Failed to upload file', err });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Please upload a file' });
    }

    const imagePath = path.join('uploads', req.file.filename); // Construct the path to be stored in the DB
    console.log('File uploaded:', imagePath);

    // Mocking DB save logic here (you can replace it with actual DB saving)
    res.json({
      message: 'File uploaded successfully',
      filePath: imagePath, // Return the file path
    });
  });
};
 
 

export{uploadFile};
