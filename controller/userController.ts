import { Request,Response } from "express";
import { getUsers,storeUserDetails,removeUserDetails,restoreUserServices,findById,findFirstByName, registerUniqueUserDetails, updateUserDetails, upsertUserDetails } from "../utils/dbHandler";
import { user } from "../types/commonInterface";
import { userSchema } from "../validations/userValidator";
import { generalResponse, serverErrorResponse } from "../helper/responseHelper";

export const home = async(req:Request, res:Response) => {
  res.send("Hello World");
}

//Retrieve Users
export const getAll = async(req:Request, res:Response) => {
  try{

    const result:user[] = await getUsers() as user[];

    if(result === undefined){
      return generalResponse(res,404,false,"something went wrong");
    }

    res.status(200).json({success:true,result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

//Register User
export const registerUser = async(req:Request, res:Response) => {
  try{

    const {error, value} = userSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong");
    }

    const {firstname,surname,middlename,email,dob,roleName,mobileNo,password}:user = req.body;

    const result:user = await storeUserDetails({firstname,surname,middlename,email,dob,roleName,mobileNo,password}) as user;

    if(result === undefined){
      return generalResponse(res,403,false,"something went wrong")
    }

    res.status(200).json({success:true,message:"User Registered Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }

}

//Find User By Primary Key
export const findByPk = async(req:Request, res:Response) => {
  try{

    const id:string = req.params.id;

    const result:user = await findById(id) as user;

    if(result === undefined){
      return generalResponse(res,404,false,"something went wrong")
    }

    res.status(200).json({success:true,result:result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

//Find the first Matched name with records and retrieve that user
export const findFirst = async (req:Request, res:Response) => {
  try{

    const name = req.params.value || "nitin";

    const result:user = await findFirstByName(name) as user;

    if(result !== undefined){
      return generalResponse(res,404,false,"something went wrong")
    }    

    res.status(200).json({success:true,result});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

//Delete User
export const deleteUser = async(req:Request, res:Response) => {
  try{

    const id:string = req.params.id;

    const result:number = await removeUserDetails(id) as number;

    if(result === 0){
      return generalResponse(res,400,false,"something went wrong")
    }

    res.status(200).json({success:true,message:"User Removed Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

// Update User
export const updateUser = async(req:Request,res:Response) => {
  try{

    const {error, value} = userSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong")
    }

    const {firstname,surname,middlename,email,dob,roleName,mobileNo,password}:user = req.body;


    const result = await updateUserDetails({firstname,surname,middlename,email,dob,roleName,mobileNo,password});

    if(result === 0){
      return generalResponse(res,404,false,"something went wrong")
    }

    res.status(200).json({success:true,message:"User updated successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

//First checking user or exist or not than registering user
export const registerUniqueUser = async (req:Request, res:Response) => {
  try{
    
    const {error, value} = userSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong")
    }

    const {firstname,surname,middlename,email,dob,roleName,mobileNo,password}:user = req.body;


    const result:boolean = await registerUniqueUserDetails(firstname,{firstname,surname,middlename,email,dob,roleName,mobileNo,password}) as boolean;

    if(result === false){
      return generalResponse(res,400,false,"something went wrong");
    }

    return res.status(200).json({success:true,message:"User registered Successfully"});

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

export const upsertUser = async (req:Request, res:Response) => {
  try{

    const {error, value} = userSchema.validate(req.body);

    if(error){
      console.log(error);
      return generalResponse(res,400,false,"something went wrong")
    }

    const {firstname,surname,middlename,email,dob,roleName,mobileNo,password}:user = req.body;


    const result:boolean = await upsertUserDetails(firstname,{firstname,surname,middlename,email,dob,roleName,mobileNo,password}) as boolean;


  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}

// restore all deleted users
export const restoreUsers = async(req:Request, res:Response) => {
  try{

    const result:number = await restoreUserServices() as number;

    if(result === 0){
      return generalResponse(res,400,false,"something went wrong")
    }else{
      return res.status(200).json({success:true, message:"Data Restored Successfully"})
    }

  }catch(err){
    console.log(err);
    return serverErrorResponse(res);
  }
}