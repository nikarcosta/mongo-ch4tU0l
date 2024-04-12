import joi from "joi";

export const messageSchema = joi.object({
  from: joi.string().trim().min(3).required(),
  to: joi.string().required(),
  text: joi.string().required(),
  type: joi.string().required(),
  time: joi.date().timestamp(),
});
