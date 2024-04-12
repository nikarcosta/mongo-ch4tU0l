import joi from "joi";

export const userSchema = joi.object({
  username: joi.string().required().min(3),
});
