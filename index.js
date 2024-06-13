const express= require('express');
const cors= require('cors');
const connectDB = require('./db');
const saveFormDataRouter = require('./saveFormData');
const app= express();
app.use(cors());
app.use(express.json());
connectDB();

app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.use('/saveLeadData', allowCors(saveFormDataRouter));

app.listen(8000,()=>{
    console.log("listining to port 8000")
})