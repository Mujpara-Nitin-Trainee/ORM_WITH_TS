import { Model,DataTypes } from "sequelize";
import sequelizeConnection from "../connection";
import { productCreationAttributes } from "../../types/productInterface";
  
class productMaster extends Model<productCreationAttributes>{
  declare id:number;
  declare productName:string;
  declare productDetails:string;
  declare quantity:number;
  declare category:string;
  declare createdAt:Date;
  declare updatedAt:Date;
  declare deletedAt:Date | null;
}
  
productMaster.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false
  },
  productName: {
    type:DataTypes.STRING,
    allowNull:false
  },
  productDetails: {
    type:DataTypes.STRING,
    allowNull:false
  },
  quantity: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  category: {
    type:DataTypes.STRING,
    allowNull:false
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull:false
  },
  updatedAt:{
    type: DataTypes.DATE,
    allowNull:false
  },
  deletedAt:{
    type: DataTypes.DATE
  }
}, {
  sequelize:sequelizeConnection,
  modelName: 'productMaster',
});

export default productMaster;
