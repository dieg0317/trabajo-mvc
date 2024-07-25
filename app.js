import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log('si funciona bien verga la conexion a la base')
})
.catch((error) => {
    console.log('no funciono la conexion a la base D: ')
})

(express()).use(cors())

(express()).listen(4000, () => {
    console.log('todo se escucha correctamente el servidor local')
})

const esquema = new mongoose.Schema ({
    name:{
        type:String
    }
})
const modelo = new mongoose.model ('tabla', esquema)

modelo.create({
    name:"Diego"
})