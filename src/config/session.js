const session = require("express-session");
const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  rolling: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "lax",
  },
});

module.exports = sessionConfig;
