import { Model,Table,Column, DataType, ForeignKey } from "sequelize-typescript";
import stateMaster from "./statemaster";

@Table
class cityMaster extends Model {

    @ForeignKey(() => stateMaster)
    @Column({type:DataType.INTEGER,allowNull:false})
    sId!:number;

    @Column({type:DataType.STRING,allowNull:false})
    cityName!:string;
}

export default cityMaster;