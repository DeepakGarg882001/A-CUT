import Services_Col from "../DB_Collections/services.js";


const add_services = async(request,response)=>{

      console.log(request.body);
      const {service_name} = request.body;

      if(!service_name){
        return response.status(400).json({error:"Please Enter the Service Name"});
      }

      const addToDatabase = await Services_Col.create({service_name:service_name});

      if(!addToDatabase){
        return response.status(400).json({error:" Process failed "});
      }

      return response.status(200).json({message:"Service Added Successfully "});

}


const get_services = async(request,response)=>{
    
       const getList = await Services_Col.find();
       if(!getList){
        return response.status(400).json({error:"Process failed "}); 
       }
       return response.status(200).json({data:getList});

}

const update_service = (request,response) =>{
    console.log(request.body);
}

export {add_services,get_services,update_service}

