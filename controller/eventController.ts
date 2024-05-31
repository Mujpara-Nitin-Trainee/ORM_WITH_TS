import { Request,Response } from "express";
import { generalResponse, serverErrorResponse } from "../helper/responseHelper";
import { eventSchema } from "../validations/eventValidator";
import { addEventDetails,getEventDetails,removeEventDetails } from "../utils/dbHandler";
import { event } from "../types/commonInterface";

export const getEvents = async(req:Request,res:Response) => {
  try{

    const result:event[] = await getEventDetails() as event[];

    if(result.length === 0){
      return generalResponse(res,404,false,"something went wrong");
    }

    res.status(200).json({success:true,result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const addEvent = async (req:Request,res:Response) => {
  try{

    const {error,value} = eventSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong");
    }

    const {userName,eventName,eventDate,eventNote} = req.body;

    const result:event = await addEventDetails({userName,eventName,eventDate,eventNote}) as event;

    res.status(200).json({success:true,result})

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const removeEvent = async (req:Request,res:Response) => {
  try{

    const id:string = req.params.id;
  
    const result:number = await removeEventDetails(id) as number;

    if(result === 0) {
      return generalResponse(res,400,false,"something went wrong")
    }

    return res.status(200).json({success:true,message:"event details deleted successfully"});
    
  }catch(err){
    console.log(err)
    return serverErrorResponse(res);
  }
}