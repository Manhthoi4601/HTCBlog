const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callb) => {
        // console.log("callb", callb);
      callb(null, "src/public/img")
    },
    filename: (req, file, callb) => {
      //callb(null, "file.png")
      console.log(file);
      callb(null, Date.now() + "_" + file.originalname)
    },
  })
  const upload = multer({ storage: storage })

  module.exports = {
    upload
  }