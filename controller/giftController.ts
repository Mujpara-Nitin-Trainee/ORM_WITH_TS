import { Request,Response } from "express";
import { getGiftsDetails,bookGift,removeGiftDetails,restoreGiftDetails, searchDeletedGiftDetails } from "../utils/dbHandler";
import  {giftSchema}  from "../validations/giftValidator";
import { gift } from "../types/commonInterface";
import { generalResponse, serverErrorResponse } from "../helper/responseHelper";

// get all gifts records
export const getGifts = async(req:Request,res:Response) => {
  try{  

    const result:gift[] = await getGiftsDetails() as gift[]; 

    if(result.length === 0){
      return generalResponse(res,404,false,"something went wrong");
    }

    res.status(200).json({success:true,result});

  }catch(err){  
    console.log(err);
    return serverErrorResponse(res);
  }
}

// add gifts
export const addGift = async(req:Request,res:Response) => {
  try{

    const {error,value} = giftSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong");
    }

    const {userName,productName,description,price,productImg,receiverName,receiverAddress,eventName,eventDate}:gift = req.body;

    const result:gift = await bookGift({userName,productName,description,price,productImg,receiverName,receiverAddress,eventName,eventDate}) as gift;
    
    if(result === undefined){
      return generalResponse(res,404,false,"something went wrong");
    }

    res.status(200).json({success:true,message:"Gift Added Successfully"});


  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

// remove gifts
export const removeGift = async(req:Request,res:Response) => {
  try{

    const id:string = req.params.id;

    const result = await removeGiftDetails(id);

    if(result !== 1){
      return generalResponse(res,400,false,"something went wrong");
    }

    res.status(200).json({success:true,message:"User Removed Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

// restore all deleted gifts
export const revertGifts = async (req:Request,res:Response) => {
  try{

    const result:number = await restoreGiftDetails() as number;

    if(result === 0){
      return generalResponse(res,400,false,"Everything is upto date.");
    }else{

      return res.status(200).json({success:true, message:"Data Restored Successfully"})
    }

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const searchDeletedGifts = async (req:Request,res:Response) => {
  try{

    const productName:string = req.params.name;

    const result:gift[] = await searchDeletedGiftDetails(productName) as gift[];

    if(result.length === 0){
      return generalResponse(res,400,false,"something went wrong");
    }

    return res.status(200).json({success:true, result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}