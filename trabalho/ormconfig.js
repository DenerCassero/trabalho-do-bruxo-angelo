module.exports = {
 type: "postgres",
 host: process.env.DB_HOST || "postgres",
 port: parseInt(process.env.DB_PORT, 10) || 5433,
 username: process.env.DB_USERNAME,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME,
 entities: ["dist/**/*.entity{.ts,.js}"],
 synchronize: true,
    };