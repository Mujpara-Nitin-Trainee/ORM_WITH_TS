import { generalResponse, serverErrorResponse } from "../helper/responseHelper";
import { Request,Response } from "express";
import { addProductDetails, getProducts, removeProductDetails, revertProductDetails } from "../utils/dbHandler";
import { productSchema } from "../validations/productValidator";

export const products = async(req:Request,res:Response) => {
  try{

    const result = await getProducts();

    if(result === undefined){
      return generalResponse(res,404,false,"something went wrong");
    }

    res.status(200).json({success:true,result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const addProduct = async(req:Request,res:Response) => {
  try{

    const {error,value} = productSchema.validate(req.body);

    if(error){
      return generalResponse(res,400,false,"something went wrong");
    }

    const {productName,productDetails,quantity,category} = req.body;

    const result = await addProductDetails({productName,productDetails,quantity,category});

    if(result === undefined){
      return generalResponse(res,403,false,"something went wrong")
    }

    return res.status(200).json({success:true,message:"Product Added Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const removeProduct = async(req:Request,res:Response) => {
  try{

    const id:string = req.params.id;

    const result:number = await removeProductDetails(id) as number;

    if(result === 0){
      return generalResponse(res,400,false,"something went wrong");
    }

    return res.status(200).json({success:true,message:"User removed Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const revertProduct = async(req:Request,res:Response) => {
  try{

    const result:number = await revertProductDetails() as number;

    if(result === 0){
      return generalResponse(res,404,false,"something went wrong");
    }

    return res.status(200).json({success:true,message:"Data retrieved successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}