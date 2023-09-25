const ErrorResponse=require("../utils/errorResponse");

const errorHandler=(err, req, res, next)=>{
    let error={...err};
    error.message=err.message;

    if(err.name==="CashError"){
        const message=`Resource not found ${err.value}`;
        error= new ErrorResponse(message, 404);
    }
    if(err.code===11000){
        const message="Duplicate field value entered.";
        error=new ErrorResponse(message, 404)
    }
    if(err.name==="validationError"){
        const message=Object.values(err.errors).map(val=>'' +val.message);
        error=new ErrorResponse(message, 404);
    }
    res.status(error.statusCode || 500).json({
        sucess:false,
        error: error.message||"Server Error"
    })
}

module.exports=errorHandler;