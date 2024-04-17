import db from "../config/database.js";

async function createParticipantRepository(name) {
  return await db.collection("participants").insertOne({
    name,
    lastStatus: Date.now(),
  });
}

async function findParticipantRepository({ name }) {
  return await db.collection("participants").findOne({ name });
}

async function getParticipantsRepository() {
  return await db.collection("participants").find({});
}

export default {
  createParticipantRepository,
  findParticipantRepository,
  getParticipantsRepository,
};
