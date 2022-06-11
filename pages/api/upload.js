import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";
import fs from "fs";
import { cwd } from "process";
import { v4 as uuidV4 } from "uuid";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const file = req.files.file[0];
  const fileName = uuidV4() + "." + file.originalFilename.split(".").pop();
  const filePath = `${cwd()}/public/uploads/${fileName}`;
  const content = fs.readFileSync(file.path);
  fs.writeFileSync(filePath, content);

  res.statusCode = 200;
  res.json({
    message: "success",
    path: `/uploads/${fileName}`,
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
