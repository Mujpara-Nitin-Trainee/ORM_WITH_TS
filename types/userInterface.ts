import { Optional } from "sequelize";
import { basicLog, Id } from "./commonInterface";

export interface userAttributes extends Id,basicLog{
  firstname:string,
  surname:string,
  middlename:string,
  email:string,
  dob:Date,
  password:string,
  roleName:string,
  mobileNo:number
}

export interface userCreationAttributes extends Optional<userAttributes,'id'> {}