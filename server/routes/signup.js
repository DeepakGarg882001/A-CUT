import UserCol from "../DB_Collections/users.js";
import bcrypt from "bcryptjs";


 const signup = async(request,response)=>{
    
    console.log(request.body);

  try {
   
    const { name , email , phone , password } = request.body;

    if( !name || !email || !phone ||  !password ){
       return response.status(401).json({error:"Please fill the form completely !"});
    }
    
    const isUserAccountExist = await UserCol.findOne({email});
    
    if(isUserAccountExist){
      return response.status(401).json({error:"Account Already Exist. Please Login !"});
    }


   
    

        const salt = bcrypt.genSaltSync();
        const secure = await bcrypt.hash(password,salt);

        const userDetails = { name , email , phone , password:secure};

        const addUser = await UserCol.create(userDetails);

        if(addUser){
            response.status(201).json({message:"You have Successfully Registered !"});
        }else{
            response.status(401).json({error:" Register Process Failed !"});

        }

   

    
  } catch (error) {
    response.status(401).json({error});
  }

};

export default signup;