import express from "express";
const router = express.Router();
// import {signup} from "./signup.js"

// console.log("onlkjlkj ")
router.route("/signup").post(async(request,response)=>{
    
    console.log(request.body);

  try {
   
    const { name , email , phone , password } = request.body;

    if( !name || !email || !phone ||  !password ){
       return response.status(401).json({error:"Please fill the form completely !"});
    }
    console.log("hh1");
    // const isUserAccountExist = await UserCol.findOne({email});
    console.log("hh2");

    // console.log(isUserAccountExist);
    // if(isUserAccountExist){
    //   return response.status(401).json({error:"Account Already Exist. Please Login !"});
    // }    
    
        const salt = bcrypt.genSaltSync();
        const secure = await bcrypt.hash(password,salt);
        console.log("hh3")
        const userDetails = { name , email , phone , password:secure};
        console.log(userDetails);
        const addUser = await UserCol.create(userDetails);

        if(addUser){
            response.status(201).json({message:"You have Successfully Registered !"});
        }else{
            response.status(401).json({error:" Register Process Failed !"});

        }  
  } catch (error) {
    response.status(401).json({error});
  }

});

export default router;
//    ======= Authentication Routes =========  //
