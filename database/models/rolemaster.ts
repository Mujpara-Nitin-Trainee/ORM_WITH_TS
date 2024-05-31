import {Column, Model, Table, DataType} from "sequelize-typescript";
import { roleAttributes, roleCreationAttributes } from "../../types/roleInterface";

@Table
class roleMaster extends Model<roleAttributes,roleCreationAttributes>{
  @Column({type:DataType.STRING, allowNull:false}) 
  roleName!: string;
}
  
export default roleMaster;