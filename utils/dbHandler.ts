import eventMaster from "../database/models/eventmaster";
import gifts from "../database/models/gifts";
import productMaster from "../database/models/productmaster";
import users from "../database/models/users";
import { event, gift, product, user } from "../types/commonInterface";

export const getUsers = async() => {
  try{
    const result = await users.findAll({raw:true,attributes:{exclude:['createdAt','updatedAt','deletedAt']}});
    return result;
  }catch(err){
    return err;
  }
}

export const storeUserDetails = async (userDetails:user) => {
  try{
    const result = await users.create({firstname:userDetails.firstname,surname:userDetails.surname,middlename:userDetails.middlename,email:userDetails.email,dob:userDetails.dob,roleName:userDetails.roleName,mobileNo:userDetails.mobileNo,password:userDetails.password});

    return result.dataValues;

  }catch(err){
    return err;
  }
}

export const updateUserDetails = async (userDetails:user) => {
  try{

    const result = await users.update({firstname:userDetails.firstname,surname:userDetails.surname,middlename:userDetails.middlename,email:userDetails.email,dob:userDetails.dob,roleName:userDetails.roleName,mobileNo:userDetails.mobileNo,password:userDetails.password},{
      where:{firstname:userDetails.firstname}
    });

    return result;  

  }catch(err){
    return err;
  }
}

export const removeUserDetails = async (userId:string) => {
  try{

    const result = await users.destroy({where:{id:userId}});
    
    return result;

  }catch(err){
    return err;
  }
}

export const findById = async (userId:string) => {
  try{

    const result = await users.findByPk(userId,{raw:true});

    return result;

  }catch(err){
    return err;
  }
}

export const findFirstByName = async(value:string) => {
  try{

    const result = await users.findOne({raw:true,where:{firstname:value}})
    console.log(result);

  }catch(err){
    return err;
  }
}

export const registerUniqueUserDetails = async(name:string,userDetails:user) => {
  try{

    const [user,created] = await users.findOrCreate({where:{firstname:name},defaults:{firstname:userDetails.firstname,surname:userDetails.surname,middlename:userDetails.middlename,email:userDetails.email,dob:userDetails.dob,roleName:userDetails.roleName,mobileNo:userDetails.mobileNo,password:userDetails.password}})

    return created;

  }catch(err){
    return err;
  }
}

export const upsertUserDetails = async(name:string,userDetails:user) => {
  try{

    const [instance, created] = await users.upsert({firstname:userDetails.firstname,surname:userDetails.surname,middlename:userDetails.middlename,email:userDetails.email,dob:userDetails.dob,roleName:userDetails.roleName,mobileNo:userDetails.mobileNo,password:userDetails.password})

    console.log(instance,created);

  }catch(err){
    return err;
  }
}

export const restoreUserServices = async() => {
  try{

    const result:number | void = await users.restore();
    
    return result;

  }catch(err){
    return err;   
  }
}

export const getGiftsDetails = async() => {
  try{

    const result = await gifts.findAll({raw:true,attributes:{exclude:['createdAt','updatedAt','deletedAt']}});

    return result;

  }catch(err){
    return err;
  }
}

export const bookGift = async(giftDetails:gift) => {
  try{

    const result = await gifts.create({userName:giftDetails.userName,productName:giftDetails.productName,description:giftDetails.description,price:giftDetails.price,productImg:giftDetails.productImg,receiverName:giftDetails.receiverName,receiverAddress:giftDetails.receiverAddress,eventName:giftDetails.eventName,eventDate:giftDetails.eventDate})

    return result;

  }catch(err){
    return err;
  }
}

export const removeGiftDetails = async(giftId:string) => {
  try{

    const result = await gifts.destroy({where:{id:giftId}});

    return result;

  }catch(err){
    return err;
  }
}

export const restoreGiftDetails = async() => {
  try{

    const result = await gifts.restore();

    return result;

  }catch(err){
    return err;
  }
}

export const searchDeletedGiftDetails = async (name:string) => {
  try{

    const result = await gifts.findAll({where:{productName:name},paranoid:false,raw:true});

    return result;

  }catch(err){
    return err;
  }
}

export const addEventDetails = async (eventDetails:event) => {
  try{

    const result = await eventMaster.create({userName:eventDetails.userName,eventName:eventDetails.eventName,eventDate:eventDetails.eventDate,eventNote:eventDetails.eventNote});

    return result.dataValues;

  }catch(err){
    return err;
  }
}

export const getEventDetails = async () => {
  try{

    const result = await eventMaster.findAll({raw:true,attributes:{exclude:['createdAt','updatedAt','deletedAt']}});

    return result;

  }catch(err){
    return err;
  }
}

export const removeEventDetails = async (eventId:string) => {
  try{

    const result = await eventMaster.destroy({where:{id:eventId}});

    return result;

  }catch(err){
    return err;
  }
}

export const getProducts = async () => {
  try{

    const result = await productMaster.findAll();

    return result;

  }catch(err){
    return err;
  }
}

export const addProductDetails = async (productDetail:product) => {
  try{

    const result = await productMaster.create({productName:productDetail.productName,productDetails:productDetail.productDetails,quantity:productDetail.quantity,category:productDetail.category})

    return result;

  }catch(err){
    return err;
  }
}

export const removeProductDetails = async (productId:string) => {
  try{  

    const result = await productMaster.destroy({where:{id:productId}});

    return result;

  }catch(err){
    return err;
  }
}

export const revertProductDetails = async () => {
  try{

    const result = await productMaster.restore();

    return result;

  }catch(err){
    return err;
  }
}