import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import participantsRouter from "./routes/participantsRoutes.js";
import messagesRouter from "./routes/messagesRoutes.js";
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use([participantsRouter, messagesRouter]);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running at PORT = ${PORT}`);
});
