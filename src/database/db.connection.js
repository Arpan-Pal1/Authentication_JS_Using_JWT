import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cruddb')
    } catch (error) {
        console.log(`DATABASE IS NOT CONNECTED ${error}`);
    }
}

export default connectDB