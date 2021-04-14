const upload = require("../middleware/upload");
const fs=require('fs');
const testfolder="../upload/";

const multipleUpload = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

   fs.readdir(testfolder,(err,files)=>{
      files.forEach(file=>{
        res.send(file);
      });
    });
    
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
  
};

module.exports = {
  multipleUpload: multipleUpload
};