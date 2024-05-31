import { userCreationAttributes } from '../../types/userInterface';
import sequelizeConnection from '../connection';
import { Model,DataTypes } from 'sequelize';  

class users extends Model<userCreationAttributes> {
  declare id:number;
  declare firstname:string;
  declare surname:string;
  declare middlename:string;
  declare email:string;
  declare dob:Date;
  declare roleName:string;
  declare mobileNo:number;
  declare password:string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date | null;
}
users.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middlename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  roleName:{
    type: DataTypes.STRING,
    allowNull:false
  },
  mobileNo:{
    type: DataTypes.BIGINT,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue:null,
    allowNull: true,
  }
}, {
    sequelize:sequelizeConnection,
    modelName: 'users',
    paranoid:true
});

export default users;