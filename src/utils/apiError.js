class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went worng",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = flase;
        this.error = error;

        if(statck){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}; 