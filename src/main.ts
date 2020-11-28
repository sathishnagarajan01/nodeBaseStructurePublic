import { envConfig } from './config/envconfig';
import { Api } from './Api';

require('dotenv').config();
let environment: string = process.env.NODE_ENV;
// console.log("Current env: "+ process.env.NODE_ENV);
envConfig.setEnvironment(environment);
const api = new Api();
api.run();

const appConfig = envConfig .getConfig().appConfig();
console.log(`listening ${appConfig.environment} environment on ${appConfig.port}`);