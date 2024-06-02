const express=require('express');
const mongoose=require('mongoose');
const connection=require('./database/db');
const port=12345;
const app=express();

//model
const UserModel=require('./model/userModel')

const Router=require('./router/apiRouter');
app.use(express.json());
app.use(Router);



const server=app.listen(port,()=>{
    console.log(`listen to the port ${port}`)
})