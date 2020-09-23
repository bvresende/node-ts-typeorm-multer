import multer from "multer";
import path from "path";
import crypto from "crypto"; //usado para gerar hashs

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex"); //gera um nome aleatório em hexadecimal
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    }
  })
}
