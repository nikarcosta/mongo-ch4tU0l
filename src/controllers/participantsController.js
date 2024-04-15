import participantsRepositories from "../repositories/participantsRepositories.js";
import messagesRepositories from "../repositories/messagesRepositories.js";

export async function createParticipant(req, res) {
  const { name } = req.body;

  try {
    const participantExists =
      await participantsRepositories.findParticipantRepository({ name });

    if (participantExists) return res.sendStatus(409);

    await participantsRepositories.createParticipantRepository(name);

    await messagesRepositories.postMessageRepository({
      name,
      to: "Todos",
      text: "entra na sala...",
      type: "status",
    });
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
