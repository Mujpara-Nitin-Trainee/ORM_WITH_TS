import dotenv from "dotenv";

dotenv.config({path: `.env`});

export const {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_DIALECT,
} = {...process.env} as {[key:string]:string}