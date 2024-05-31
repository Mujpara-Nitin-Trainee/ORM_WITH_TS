import { giftCreationInterface } from '../../types/giftInterface';
import sequelizeConnection from '../connection';
import { Model,DataTypes } from 'sequelize';  

class gifts extends Model<giftCreationInterface> {
  declare id:number;
  declare userName:string;
  declare productName:string;
  declare description:string;
  declare price:number;
  declare productImg:string;
  declare receiverName:string;
  declare receiverAddress:string;
  declare eventName:string;
  declare eventDate:Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date | null;
}

gifts.init({
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
  productName:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  price: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  productImg: {
    type:DataTypes.BLOB,
    allowNull:false
  },
  receiverName:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  receiverAddress:{ 
    type:DataTypes.STRING,
    allowNull:false
  },
  eventName:{
    type:DataTypes.STRING,
    allowNull:false
  },
  eventDate:{
    type: DataTypes.DATE,
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
  }, {
    sequelize:sequelizeConnection,
    modelName: 'gifts',
    paranoid:true
  });
   
export default gifts;