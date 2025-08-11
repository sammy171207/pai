function requestTimeStamp(req,res,next){
    console.log('middlware running')
    req.requestTimeStamp=new Date().toISOString();
    next()
}
module.exports=requestTimeStamp;