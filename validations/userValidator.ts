import coreJoi from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const userSchema = Joi.object({
  firstname: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).message("Please Enter Valid firstname").min(3).max(30).required(),
  surname: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).message("Please Enter Valid surname").min(3).max(30).required(),
  middlename: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).message("Please Enter Valid middlename").min(3).max(30).required(),
  email: Joi.string().trim().email({minDomainSegments:2, tlds:{allow:['com','net']}}).message("Please Enter Valid email").required(),
  dob: Joi.date().format('YYYY-MM-DD').less("2006-05-28").message("Please Enter Valid Date of Birth").required(),
  roleName: Joi.string().trim().pattern(new RegExp(/^[A-Za-z\s]+$/)).min(3).message("Please Enter Valid Role Name").max(10).required(),
  mobileNo: Joi.string().trim().regex(/^[0-9]{10}$/).message("Please Enter Valid MobileNo").required(),
  password: Joi.string().trim().min(8).message("Please Enter Valid password").required(),
})