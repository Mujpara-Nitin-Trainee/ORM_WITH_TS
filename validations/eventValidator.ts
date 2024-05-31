import coreJoi from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const eventSchema = Joi.object({
  userName: Joi.string().trim().pattern(/^[a-zA-z\s]+$/).min(3).max(30).required(),
  eventName: Joi.string().trim().pattern(/^[a-zA-z\s]+$/).min(3).max(30).required(),
  eventDate: Joi.date().format("YYYY-MM-DD").greater(new Date()).required(),
  eventNote: Joi.string().trim().min(3).required(),
})