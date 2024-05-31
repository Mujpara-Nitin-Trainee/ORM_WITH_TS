import express, { Application } from "express";
import router from "./routes/router";
import { PORT } from "./configs";

const app : Application = express();
const Port: string | number = PORT || 4000;

app.use(express.json());
app.use(router);

app.listen(Port, ()=> {console.log(`Server is running on :- http://localhost:${Port}/`)})