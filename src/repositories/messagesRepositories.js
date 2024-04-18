import db from "../config/database.js";
import dayjs from "dayjs";

async function postMessageRepository({ from, to, text, type }) {
  return await db.collection("messages").insertOne({
    from,
    to,
    text,
    type,
    time: dayjs().format("HH:mm:ss"),
  });
}

async function getMessagesRepository(limit, user) {
  return await db
    .collection("messages")
    .find({
      $or: [
        { from: { $eq: user } },
        { to: { $eq: user } },
        { type: "message" },
      ],
    })
    .limit(limit)
    .toArray();
}

export default {
  postMessageRepository,
  getMessagesRepository,
};
