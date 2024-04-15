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

export default {
  postMessageRepository,
};
