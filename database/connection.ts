import { Sequelize } from 'sequelize';
import { DB_NAME, DB_USER, DB_PASS, DB_HOST } from '../configs';

let sequelizeConnection: Sequelize = new Sequelize(DB_NAME , DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  port:3306 
});

const dbConnection = async () => {
  try{
    await sequelizeConnection.authenticate();
    console.log("Database Connected Successfully");
  }catch(err){
    console.log(err);
  }
}

dbConnection();

export default sequelizeConnection;