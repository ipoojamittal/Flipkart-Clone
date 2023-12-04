import mongoose from "mongoose";


export const Connection = async (connectionURL) => {
    // const URL = `mongodb+srv://${username}:${password}@e-commercewebsite.2nucvdt.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Successfully');
    } catch(error){
        console.log('Error while connecting with the database: ', error.message);
    }
};

export default Connection;