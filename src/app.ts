import express from 'express';
import { config } from './config';
import { ErrorMiddleware } from './middlewares/error.middleware';
import HelloRoute from './routes/hello.route';

config.dotenvConfig();
const app = express();
const PORT = config.getEnvVariable('PORT') || 4000;


app.use( 
    express.json() , 
    express.urlencoded({extended: true}) 
);

app.use('/hello',HelloRoute);

/* ERROR RESPONSE HANDLING */
app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.errorHandler);

app.listen(PORT, () => {
  return console.log(`Server started at http://localhost:${PORT}`);
});