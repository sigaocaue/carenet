"use strict";
module.exports = {
    env: 'development',
    db: 'carenet',
    dialect: 'mongo',
    username: 'carenet',
    password: 'carenet@mongo',
    host: 'mongodb',
    serverPort: 3000,
    mongoPort: 27017,
    get dbURL() {
        return `mongodb://${this.host}:${this.mongoPort}/${this.db}`;
    },
    secret: 'S3cr3t',
};
//# sourceMappingURL=development.env.js.map