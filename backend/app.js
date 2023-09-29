const bodyParser = require('body-parser');
const express=require('express');
const app=express()
const mongoose=require('mongoose');

const morgan=require('morgan');
require('dotenv').config();
var cors=require('cors');


//import routes
const cookieParser = require('cookie-parser');
const errorHandler=require('./middleware/error')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')
const jobTypeRoutes=require('./routes/jobTypeRoutes');
const jobRoute=require('./routes/jobsRoutes');
//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));

app.use(cookieParser());
app.use(cors());

//Routes Middleware

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', jobTypeRoutes)
app.use('/api', jobRoute)
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