import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const dbName:string = process.env.DB_NAME!;
const dbUser: string  = process.env.DB_USER!;
const dbPassword: string  = process.env.DB_PASS!;
const dbHost: string  = process.env.DB_HOST!;


export const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
  host: dbHost,
  dialect: 'mysql',
  logging:false
})

export const initializeConnection = async () => {
  try{
    await sequelize.authenticate();
    console.log("Connection established successfully.") 
  }catch(err){
    console.log(err);
  }
}