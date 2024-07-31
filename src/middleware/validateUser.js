
const validateUser = (req , res , next) =>{
    const {userName , email , password} = req.body ;
    if(!userName || !email || !password){
        return res.status(400).json({
            status: 'Error' ,
            message: 'Pleave Provide all required Fields'
        })
    }  
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            status: 'Error' ,
            message: 'Please provide a valid email address',
        });
    }
    
    next()
}

module.exports = validateUser ;