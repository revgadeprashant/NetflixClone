import express from "express";
import mongoose from 'mongoose';

const url = `mongodb+srv://OTT:OTT@ott.nccdi.mongodb.net/OTT?retryWrites=true&w=majority`;
const connection = () => {
    try {
        mongoose.connect(url, () => console.log(`connection to database successfully`))
    } catch (error) {
        console.log("error while connecting to db")
    }

}
export default connection;