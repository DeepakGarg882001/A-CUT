import app from "./app.js";
import { connectDB } from "./DataBase.js";

const startServer = ()=>{

    connectDB();

    const PORT = process.env.PORT||6010;
    

app.listen(PORT,()=>{
    console.log(`server is running at PORT:${PORT}`)
})

}

export default startServer;
