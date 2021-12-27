import express from 'express';
import { config } from './config';
import HelloRoute from './routes/hello.route';

config.dotenvConfig();
const app = express();
const PORT = config.getEnvVariable('PORT') || 4000;


app.use(express.json());

app.use('/hello',HelloRoute);

app.listen(PORT, () => {
  return console.log(`Server started at http://localhost:${PORT}`);
});