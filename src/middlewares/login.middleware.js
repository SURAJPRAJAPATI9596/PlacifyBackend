const passport = require("./../config/passport");
const loginMiddleware = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: info?.message || "Authentication failed",
      });
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      // res.json({
      //   success: true,
      //   message:
      //     "welcome back" + user.fullname + "Thank you revisiting placify",
      // });
      next();
    });
  })(req, res, next);
};

module.exports = loginMiddleware;
