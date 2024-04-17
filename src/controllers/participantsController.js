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
      from: name,
      to: "Todos",
      text: "entra na sala...",
      type: "status",
    });
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function getParticipants(_, res) {
  try {
    const result = await participantsRepositories.getParticipantsRepository();
    const participants = await result.toArray();
    return res.status(200).send(participants);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
