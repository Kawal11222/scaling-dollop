const mongoose = require('mongoose');

const DB = `mongodb+srv://jkawal712:08107054911@cluster0.yyqay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(DB,{
    useNewUrlParser:true
 }).then(()=>{ 
    console.log('Connected With database'); 
 }).catch((err)=>{ 
 
    console.log(err); 
 });