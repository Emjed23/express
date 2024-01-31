
const date= new Date()
const day=date.getDate()
const hour=date.getHours()
const login=(req,res,next)=>{
    if(hour>17){
        res.json('page closed')
    }
    next()
    }
    
    module.exports=login