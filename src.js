import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import api from './src/routes/api.js';
import {logger,notFound,errorHandler} from './src/middleware/index.js';
const app=express();
app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'}));
app.use(express.json());
app.use(logger);
app.use(express.static('dist'));
app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.use(api);
app.get('/{*path}', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.resolve('dist', 'index.html'), (err) => {
    if (err) next();
  });
});
app.use(notFound);
app.use(errorHandler);
const port=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI).then(()=>app.listen(port,()=>console.log(`API running on http://localhost:${port}`))).catch(err=>{console.error('MongoDB connection failed',err);process.exit(1)});
