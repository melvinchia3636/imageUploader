const { IncomingForm } = require("formidable");
const { promises: fs } = require("fs");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const cors = require("cors")
bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())
   .use(bodyParser.urlencoded())
app.use(cors());

app.post('/upload', async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  try {
    const imageFile = data.files.file;
    const imagePath = imageFile.filepath;
    const pathToWriteImage = `./uploads/${uuidv4()}.${imageFile.originalFilename
      .split(".")
      .pop()}`;
    const image = await fs.readFile(imagePath);
    await fs.writeFile(pathToWriteImage, image);
    res
      .status(200)
      .send({
        message: "success",
        path: pathToWriteImage.slice(1).replace("uploads", "image"),
      });
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
})

app.get('/image/:filename', (req, res) => {
  const { filename } = req.params;
  const pathToImage = `${__dirname}/uploads/${filename}`;
  res.sendFile(pathToImage);
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
})
