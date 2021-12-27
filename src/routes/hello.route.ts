import { Router } from "express";
import { HelloController } from "../controllers/hello.controller";
import { helloMiddleware } from "../middlewares/hello.middleware";

const route = Router();

route
    .get('/',helloMiddleware,HelloController.getHello)

export default route;