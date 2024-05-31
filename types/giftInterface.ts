import { Optional } from "sequelize";
import { basicLog,Id } from "./commonInterface";

export interface giftAttributes extends Id,basicLog{
  userName:string,
  productName:string,
  description:string,
  price:number,
  productImg:string,
  receiverName:string,
  receiverAddress:string,
  eventName:string,
  eventDate:Date
}

export interface giftCreationInterface extends Optional<giftAttributes,'id'>{}