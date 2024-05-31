import { Optional } from "sequelize";
import { Id } from "./commonInterface";

export interface roleAttributes extends Id{
  roleName:string
}

export interface roleCreationAttributes extends Optional<roleAttributes,'id'> {}