import { eventCreationAttributes } from '../../types/eventInterface';
import sequelizeConnection from '../connection';
import { Model,DataTypes } from 'sequelize';  

class eventMaster extends Model<eventCreationAttributes> {
  declare id:number;
  declare userName:string;
  declare eventName:string;
  declare eventDate:Date;
  declare eventNote:string;
  declare createdAt:Date;
  declare updatedAt:Date;
  declare deletedAt:Date | null;
}
eventMaster.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false
  },
  userName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  eventName:{
    type: DataTypes.STRING,
    allowNull:false
  },
  eventDate: {
    type:DataTypes.DATE,
    allowNull:false
  },
  eventNote: {
    type:DataTypes.STRING,
    allowNull:false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull:false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull:false
  },
  deletedAt: {
    type: DataTypes.DATE,
  }
},{
  sequelize:sequelizeConnection,
  modelName: 'eventMaster',
  paranoid:true
});
  
export default eventMaster;
