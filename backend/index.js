import express from "express"
const app = express();
app.use(express.json()); 

import mongoose from "mongoose";

import User from './models/user.model.js';
import userRouter from './routes/user.route.js'
import roomRouter from './routes/room.route.js'

import { config } from "dotenv";
config();

import cors from "cors";
app.use(cors());


mongoose.connect(process.env.URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  console.log("mongoose connected");
})
.catch(()=>{
  console.log("mongoose not connected");
})

app.use(userRouter)
app.use(roomRouter)

const port = process.env.PORT || 3000;
app.listen(port , ()=>{
  console.log(`app is listening on ${port}`);
})