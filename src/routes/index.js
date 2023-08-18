const newRouter = require("./news");
const siteRouter = require("./site");

const route = (app) => {
  app.get("/", siteRouter);
  app.get("/search", siteRouter);
  app.use("/news", newRouter);
};

module.exports = route;
