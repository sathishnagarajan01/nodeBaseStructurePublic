export class DevConfig {

    public DbConnectionString() {
        return {
            url: '192.168.1.1',
            user: 'test',
            password: 'test',
            port: 3306,
            database: "dbname"
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
