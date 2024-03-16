const plantRouter = require("./plant");
const potRouter = require("./pot");
const categoryRouter = require("./category");
const producttypeRouter = require("./producttype");
function route(app) {
    app.use("/api/v1/plant",plantRouter);
    app.use("/api/v1/pot",potRouter);
    app.use("/api/v1/category",categoryRouter);
    app.use("/api/v1/producttype",producttypeRouter);
}
module.exports = route;