import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

// load .env
dotenv.config()

const BASE_URL_PORT = process.env.BASE_URL_PORT

const app = express();
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  
//app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(BASE_URL_PORT, ()=> console.log('Server up and running...'));