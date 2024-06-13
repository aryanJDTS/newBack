const express= require('express');
const cors= require('cors');
const connectDB = require('./db');
const app= express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/saveLeadData',require('./saveFormData'))

app.listen(8000,()=>{
    console.log("listining to port 8000")
})