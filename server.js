const express=require("express")

const app=express();

app.use('/',(req,res)=>{
    res.send("Hello my name is Bittu kumar");
})

app.listen(3000)