const bodyParser = require('body-parser');
const express=require('express');
const app=express()
const mongoose=require('mongoose');

const morgan=require('morgan');
require('dotenv').config();
var cors=require('cors');
const cookieParser = require('cookie-parser');
const errorHandler=require('./middleware/error')

//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));

app.use(cookieParser());
app.use(cors());

//Routes
// app.get('/',(req, res)=>{
//     res.send("House Helper Site Platform");
// })

//error middleware
app.use(errorHandler)
//Database Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true

}).then(()=>console.log("Db Connected"))
.catch((err)=>console.log(err));
//port
const port=process.env.PORT ||3000

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});