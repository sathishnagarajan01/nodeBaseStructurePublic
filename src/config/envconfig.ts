import { Environment } from "./environment";
import { DevConfig } from "./config.dev";
import { BaseConfig } from "./baseconfig";
import { ProductionConfig } from "./config.prod";
import { QcConfig } from "./config.qc";

class EnvConfig {

    private config: BaseConfig;

    public setEnvironment(environment: string) {
        switch(environment) {
            case Environment[Environment.development]:
                this.config = new DevConfig();
                break;
            case Environment[Environment.development]:
                this.config = new ProductionConfig();
                break;
            case Environment[Environment.development]:
                this.config = new QcConfig();
                break;
            default:
                throw new Error('Invalid environment. Please set the environment in .env file');
        }
    }

    public getConfig() {
        return this.config;
    }
}

export const envConfig = new EnvConfig();