const express=require('express');
const { connectDb } = require('./config/db');
const app =express();
const publiserRoutes=require('./routes/publisherRoutes');
const gameRoutes=require('./routes/gameRoutes')
const requestTimeStamp = require('./middlewares/requestTimeStamp');
app.use(express.json())
app.use(requestTimeStamp)
app.use('/api/publishers',publiserRoutes)
app.use('/api/games',gameRoutes)
connectDb()
app.listen(3000,()=>{
    console.log("Server Running")
})