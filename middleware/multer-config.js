const multer = require('multer');
const fs = require('fs');

const MIME_TYPES = {
  'video/mp4' : 'mp4'
};

///////////////////////////////// MULTER & S3 Upload Methods

const localStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'videos');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_').split('.')[0];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

// For local storage
module.exports = multer({storage: localStorage}).array('videos', 1);



