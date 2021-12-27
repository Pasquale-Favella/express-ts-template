import { config } from "../config";

export const isProd = () : boolean => config.getEnvVariable('NODE_ENV') === 'production';