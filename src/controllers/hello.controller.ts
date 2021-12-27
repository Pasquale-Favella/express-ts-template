import { Response } from "express"
import { HelloRequest } from "../middlewares/hello.middleware";
import { HelloService } from "../services/hello.service"

export const HelloController = {

    getHello : (req :HelloRequest, res : Response) :void =>{
        const message = req.hello + HelloService.getServerMessage();
        res.json({message})
    }
}