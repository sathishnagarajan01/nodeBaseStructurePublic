export class QcConfig {

    public DbConnectionString() {
        return {
            url: '104.211.227.3',
            user: 'wegotdev3',
            password: 'wegot@DB3',
            port: 3306,
            database: "we2db"
        };
    }

    public appConfig() {
        return {
            name: 'Astro Software',
            version: '1.0.0',
            port: 9091,
            environment: process.env.NODE_ENV,
            baseRoute: '/api',
            baseTestRoute: '/api/test'
        }
    }
}