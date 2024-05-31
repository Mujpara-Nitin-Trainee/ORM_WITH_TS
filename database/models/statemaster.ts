import { Model,Table,Column,DataType } from "sequelize-typescript";

@Table
class stateMaster extends Model {
  @Column({ type:DataType.STRING, allowNull: false})
  stateName!: string
}
  

export default stateMaster;