const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(proxy(["/user"], { target: "http://localhost:5000" }));
};
