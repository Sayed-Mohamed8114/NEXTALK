import express from 'express';

// we make the import to the dotenv and make the config method to be able of using the port in our code  
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import { ConnectDB } from './lib/db.js';

const app = express();
const port = process.env.PORT

app.use("/api/auth",authRoutes);

app.listen(port,()=>{
    console.log(`server on ${port}`);
    ConnectDB();
})