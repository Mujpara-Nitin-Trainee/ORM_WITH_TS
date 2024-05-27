import express,{Application, Request,Response} from "express";
import { config } from "dotenv";
import { initializeConnection } from "./config/config";

config();

const app:Application = express();
const Port:string = process.env.PORT || "3000";


initializeConnection();

app.get('/',(req:Request,res:Response) => {
  res.send("Hello World");
})


app.listen(Port, ()=> { console.log(`Server Running on :- http://localhost:${Port}/`)})