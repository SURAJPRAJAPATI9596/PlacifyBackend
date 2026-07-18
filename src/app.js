const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./../src/middlewares/errorHandler.middleware.js");
const logger = require("./middlewares/logger.middleware.js");
const aiRoutes = require("./routes/ai.routes.js");
const emailRoutes = require("./routes/email.routes.js");
const trackerRoutes = require("./routes/tracker.routes.js");
const codingRoutes = require("./routes/coding.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const passport = require("./config/passport.js");
const session = require("express-session");
//const sessionConfig = require("./config/session.js");

//cors
app.use(
  cors({
    origin: ["https://placifyp.netlify.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger);
app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/email", emailRoutes);
app.use("/api/v1/trackers", trackerRoutes);
app.use("/api/v1/coding", codingRoutes);
app.use("/api/v1/auth", authRoutes);
app.use(errorHandler);

module.exports = app;
