import { Router } from "express";
import { postMessage } from "../controllers/messagesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { messageSchema } from "../schemas/messagesSchema.js";

const messagesRouter = Router();

messagesRouter.post("/messages", validateSchema(messageSchema), postMessage);

export default messagesRouter;
