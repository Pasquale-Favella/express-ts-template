import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";
import { isProd } from "../utils";

export const ErrorMiddleware = {

    notFound : (req : Request, res : Response, next :NextFunction ) : void =>{
        res.status(404);
        const error = new Error("Not Found - " + req.originalUrl);
        next(error);
    } ,
    errorHandler : ((err :HttpException, _req : Request, res : Response, _next :NextFunction )=>{

        res.status(res.statusCode || 500);
        res.json({
          message: err.message,
          stack: isProd() ? null : err.stack,
        });

    }) as ErrorRequestHandler
}