import { NextFunction, Request, Response } from "express";

export interface HelloRequest extends Request{
    hello: string;
}

export function helloMiddleware(req :HelloRequest , _res : Response , next : NextFunction){
    req.hello = '😍 ,';
    next();
}