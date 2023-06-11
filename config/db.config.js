import mongoose from 'mongoose';
import 'dotenv/config';
const URL = process.env.MONGO_URL;
export const dbConnection = async() =>{
    const connection = await mongoose.connect(URL,{
        useNewUrlParser: true,
    })
    console.log('Mongo Db Connected' , connection.connection.host);
}

