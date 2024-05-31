import coreJoi from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const giftSchema = Joi.object({
  userName: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).min(3).max(30).required(),
  productName: Joi.string().trim().min(3).max(70).required(),
  description: Joi.string().trim().min(10).required(),
  price: Joi.number().greater(50).required(),  
  productImg: Joi.string().trim().required(),
  receiverName: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).min(3).max(30).required(),
  receiverAddress: Joi.string().trim().min(10).required(),
  eventName: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).min(5).required(),
  eventDate: Joi.date().format('YYYY-MM-DD').greater(new Date()).required()
})