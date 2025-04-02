"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project_js_1 = require("./entities/Project.js");
const mikroConfig = {
    entities: [Project_js_1.Project],
    dbName: "sidegit",
    user: "postgres",
    password: "password",
    driver: require('@mikro-orm/postgresql').PostgreSqlDriver,
    debug: true,
    migrations: {
        path: "./migrations",
        glob: "!(*.d).{js,ts}",
    },
};
exports.default = mikroConfig;
//# sourceMappingURL=mikro-orm.config.js.map