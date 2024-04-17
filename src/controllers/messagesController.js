import messagesRepositories from "../repositories/messagesRepositories.js";
import participantsRepositories from "../repositories/participantsRepositories.js";

export async function postMessage(req, res) {
  const { to, text, type } = req.body;
  const { user } = req.headers;

  try {
    const participantExists =
      await participantsRepositories.findParticipantRepository({ name: user });

    if (!participantExists) return res.sendStatus(404);

    await messagesRepositories.postMessageRepository({
      from: user,
      to,
      text,
      type,
    });
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
