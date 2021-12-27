import {config as dotenvConfig} from 'dotenv';

export const config ={
    dotenvConfig , 
    getEnvVariable : (key : string) : string =>{
        return process.env[key];
    }
}

