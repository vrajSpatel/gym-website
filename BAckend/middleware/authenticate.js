const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) =>{
    const token = req.cookies('auth-token')
    if(!token){
        return res.status(401).json({message : 'Access Denied'})
    }
    try {
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = verified;
        next()
        
    } catch (error) {
        return res.status(400).json({message : "Invalid Token"})
    }
}

module.exports = authenticate;

// export default authenticate;