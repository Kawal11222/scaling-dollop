const express = require("express");
const port = process.env.PORT || 80;
const cors = require('cors');
const app = express();
require("./database/conn")
const schema = require("./database/modals/schema")
app.use(cors());
const  bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/" , async (req,res)=>{
    
    let data  = await schema.findOne();
    console.log(data);

   res.status(201).json({
    fixedTemperature  : data.fixedTemperature,
       status: 201 
   });
});
app.post("/" , async (req,res)=>{

    try{
        console.log(req.body);

        let formedData  = new schema(req.body)
        
        let deleted = await schema.deleteMany({});
        if(deleted){
             await formedData.save(); 
           };

        res.status(200).json({
            message: "Temperature Changed Succcessfully!",
            status : 200
        })
    

    }catch(err){
         console.log(err);
         res.status(400).json({
             message:"An Error Occured!",
             status: 400
         })
    }
   
  

})

app.listen(port , ()=>{
    console.log("The Server is Running at Port at 8080");
})