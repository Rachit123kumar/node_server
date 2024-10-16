const express=require("express")
const fs=require("fs")

const app=express();

app.use('/',(req,res)=>{
    res.send("Hello my name is Bittu kumar");
})

app.use("/product",(req,res)=>{
    fs.readFileSync('./dev-data/data.json',"utf-8",(err,data)=>{
        res.send(data);
    })

})

app.listen(3000)