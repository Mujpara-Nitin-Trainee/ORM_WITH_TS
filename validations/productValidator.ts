import coreJoi from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const productSchema = Joi.object({
  productName: Joi.string().trim().pattern(/^[A-Za-z\s]+$/).min(3).max(50).required(),
  productDetails: Joi.string().trim().required(),
  quantity: Joi.number().greater(10).required(),
  category: Joi.string().trim().pattern(/^[A-Za-z\s]+$/).required(),
})