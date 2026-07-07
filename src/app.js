const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./../src/middlewares/errorHandler.middleware.js");
const logger = require("./middlewares/logger.middleware.js");
const aiRoutes = require("./routes/ai.routes.js");
const emailRoutes = require("./routes/email.routes.js");
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use;
app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/email", emailRoutes);

app.use(errorHandler);

module.exports = app;
