import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Storage engine for multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Folder to store the uploaded files
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Check file types (jpg, jpeg, png)
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/; // Allowed file extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true); // Valid file
  } else {
    cb(new Error('Invalid file type! Only JPG, JPEG, and PNG formats are allowed.'));
  }
}

// Multer upload settings
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// Route to handle file upload
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file type.');
  }
  res.send(`/${req.file.path.replace('\\', '/')}`); // Send the file path after successful upload
});

export default router;
