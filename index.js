const express=require("express");
const app=express();
const pool=require("./db");
const port=5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",pool.getdata)
app.get("/user/:id",pool.getdatabyid);
app.delete("/user/:id",pool.deletedatabyid)
app.post("/user",pool.createuser)
app.put("/user/:id",pool.updatedata)







app.listen(port,()=>{
    console.log(`App is lisning on ${port}`);
})
