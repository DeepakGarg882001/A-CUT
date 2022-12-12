import plateformServices_Col from "../DB_Collections/plateformServices.js";


const add_services = async(request,response)=>{

      console.log(request.body);
      const {service_name} = request.body;

      if(!service_name){
        return response.status(400).json({error:"Please Enter the Service Name"});
      }

      const addToDatabase = await plateformServices_Col.create({service_name:service_name});

      if(!addToDatabase){
        return response.status(400).json({error:" Process failed "});
      }

      return response.status(200).json({message:"Service Added Successfully "});

}


const get_services = async(request,response)=>{
    
       const getList = await plateformServices_Col.find();
       if(!getList){
        return response.status(400).json({error:"Process failed "}); 
       }
       return response.status(200).json({data:getList});

}

const update_service = async(request,response) =>{
     console.log(request.body);
     const {_id,service_name}= request.body;

     if(!_id | !service_name){
      return response.status(400).json({error:"Please fill the Service Name Properly"});
     }

     const updatetoDataBase = await plateformServices_Col.findByIdAndUpdate(_id,{service_name});

     if(!updatetoDataBase){
      return response.status(402).json({error:"Process Failed"});
     }

     return response.status(200).json({message:"updated successfully"})


}

const delet_service = async(request,response) =>{
  console.log(request.body);
  const {_id}= request.body;

  if(!_id ){
   return response.status(400).json({error:"Please Choose Proper Service Name"});
  }

  const delettoDataBase = await plateformServices_Col.findByIdAndDelete(_id);

  if(!delettoDataBase){
   return response.status(402).json({error:"Process Failed"});
  }

  return response.status(200).json({message:"deleted successfully"})


}

export {add_services,get_services,update_service,delet_service}

