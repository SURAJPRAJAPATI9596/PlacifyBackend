const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./../src/middlewares/errorHandler.middleware.js");
const logger = require("./middlewares/logger.middleware.js");
const aiRoutes = require("./routes/ai.routes.js");
const emailRoutes = require("./routes/email.routes.js");
const trackerRoutes = require("./routes/tracker.routes.js");
const codingRoutes = require("./routes/coding.routes.js");
app.use(cors({ origin: "https://placifyp.netlify.app/" }));

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use;
app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/email", emailRoutes);
app.use("/api/v1/trackers", trackerRoutes);
app.use("/api/v1/coding", codingRoutes);
app.use(errorHandler);

module.exports = app;
