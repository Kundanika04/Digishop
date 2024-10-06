import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

<<<<<<< HEAD
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
=======
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
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
<<<<<<< HEAD
    return cb(null, true);
  } else {
    cb('Images Only!');
  }
}

=======
    return cb(null, true); // Valid file
  } else {
    cb(new Error('Invalid file type! Only JPG, JPEG, and PNG formats are allowed.'));
  }
}

// Multer upload settings
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

<<<<<<< HEAD
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path.replace('\\', '/')}`);
=======
// Route to handle file upload
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file type.');
  }
  res.send(`/${req.file.path.replace('\\', '/')}`); // Send the file path after successful upload
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
});

export default router;
