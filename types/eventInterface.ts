import { Optional } from "sequelize";
import { basicLog, Id } from "./commonInterface";

export interface eventAttributes extends Id,basicLog{
  userName:string,
  eventName:string,
  eventDate:Date,
  eventNote:string,
}

export interface eventCreationAttributes extends Optional<eventAttributes,'id'>{}