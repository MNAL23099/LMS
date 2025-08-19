const express = require("express")
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "fileUploads"); // folder to save files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // keeps original name + adds timestamp
  }
});

const upload = multer({storage: storage});

router.post("/uploadFile", upload.single("file"), (req, res)=> {
    console.log("Route accessed!");
    console.log(req.file);
    res.write("success");
    res.end();
})


module.exports = router;