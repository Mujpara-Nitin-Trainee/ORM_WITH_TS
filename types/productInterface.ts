import { Optional } from "sequelize";
import { basicLog, Id } from "./commonInterface";

export interface productAttributes extends Id,basicLog{
  productName:string;
  productDetails:string;
  quantity:number;
  category:string;
}

export interface productCreationAttributes extends Optional<productAttributes,'id'> {}