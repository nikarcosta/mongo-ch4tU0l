import { Router } from "express";
import { postMessage, getMessages } from "../controllers/messagesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { messageSchema } from "../schemas/messagesSchema.js";

const messagesRouter = Router();

messagesRouter.post("/messages", validateSchema(messageSchema), postMessage);
messagesRouter.get("/messages", getMessages);

export default messagesRouter;
