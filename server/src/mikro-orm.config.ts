// filepath: c:\Users\bryan\Desktop\SideGit\server\mikro-orm.config.ts
import { Options } from "@mikro-orm/core";
import { Project } from "./entities/Project.js";

const mikroConfig: Options = {
  entities: [Project], // Path to your entities
  dbName: process.env.DB_NAME, // Use DB_NAME from .env
  user: process.env.DB_USER, // Use DB_USER from .env
  password: process.env.DB_PASSWORD, // Use DB_PASSWORD from .env
  driver: require('@mikro-orm/postgresql').PostgreSqlDriver,
  debug: true, // Enable debug mode for development
  migrations: {
    path: "./migrations", // Path to the migrations folder
    glob: "!(*.d).{js,ts}", // Match both .js and .ts files
  },
};

export default mikroConfig;