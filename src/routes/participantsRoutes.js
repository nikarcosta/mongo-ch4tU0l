import { Router } from "express";
import {
  createParticipant,
  getParticipants,
} from "../controllers/participantsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { participantSchema } from "../schemas/participantsSchema.js";

const participantsRouter = Router();

participantsRouter.post(
  "/participants",
  validateSchema(participantSchema),
  createParticipant
);
participantsRouter.get("/participants", getParticipants);

export default participantsRouter;
