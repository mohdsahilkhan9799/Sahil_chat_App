import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    // generate secret key command =>>   openssl rand -base64 32
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN,{
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
        httpOnly:true,    // prevent xss attack
        secure:true,
        sameSite:"strict"  //  prevent csrf attack
    })
}

export default createTokenAndSaveCookie;



