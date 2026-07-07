const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
// destination: (req, file, cb) => {
//     cb(null, "public/temp");
//   },
module.exports = upload;
