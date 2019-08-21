module.exports = {
  env: 'test',
  db: 'carenet-test',
  dialect: 'mongo',
  username: 'carenet',
  password: 'carenet@mongo',
  host: 'mongodb',
  serverPort: 3000,
  mongoPort: 27017,
  get dbURL() {
    return `mongodb://${this.host}:${this.mongoPort}/${this.db}`
  },
  secret: 'S3cr3t',
}
