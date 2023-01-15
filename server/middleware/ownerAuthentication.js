import UserCol from "../DB_Collections/users.js";
import jwt from "jsonwebtoken";

const ownerAuthenticate = async (request , response, next)=>{
    console.log(request.cookies)
    try {
         
        const token = request.cookies.Authentication_token;
        const Secure_Key = process.env.JWT_KEY_OWNER; 
        console.log(token);
        console.log(request.cookies)
        const isValidToken =  jwt.verify(token ,Secure_Key);
        
        let id = "";

        if(!isValidToken){
            return response.status(401).json({error:"UnAuthorised User !"});
        }else{
          id= isValidToken.id;
        }

        
        
        const findUser = await UserCol.findById(id);

        if(findUser){
             
            if(findUser.userRole.role === 'owner' ){
                next();
            }
            else{
               return response.status(401).json({error:"UnAuthorised User !"});
            }

        }else{
            response.status(401).json({error:"Authentication Process failed !"});
        }



 

        
    } catch (error) {
        response.status(401).json({error});
    }
  

}

export default ownerAuthenticate;