import { Response } from "express";

export const generalResponse = async(res:Response,statusCode:number,success:boolean,message:string) => {
  return res.status(statusCode).json({success:success, message:message});
}

export const serverErrorResponse = async(res:Response) => {
  return res.status(500).json({success:false, message:"Internal Server Error"});
}