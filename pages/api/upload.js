import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import { v4 } from 'uuid';

export default async function handler(req, res) {
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
    const pathToWriteImage = `./uploads/${v4()}.${imageFile.originalFilename.split('.').pop()}`;
    const image = await fs.readFile(imagePath);
    await fs.writeFile(pathToWriteImage, image);
    //store path in DB
    res.status(200).json({ message: "success", path: pathToWriteImage.slice(1).replace("/public", "") });
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};