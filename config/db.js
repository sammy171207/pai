const mongoose=require('mongoose');
exports.connectDb=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/pai");
        console.log("Database Connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

