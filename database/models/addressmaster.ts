import { Model,Table,Column, DataType, ForeignKey } from "sequelize-typescript";
import cityMaster from "./citymaster";

@Table
class addressMaster extends Model {
    @Column({type:DataType.INTEGER,references:{model:'users',key:'id'}, allowNull:false})
    userId!:string;

    @ForeignKey(() => cityMaster)
    @Column({type:DataType.INTEGER,allowNull:false})
    cityId!:number;

    @Column({type:DataType.STRING,allowNull:false})
    area!:string;

    @Column({type:DataType.NUMBER,allowNull:false})
    pincode!:number;
}

export default addressMaster;