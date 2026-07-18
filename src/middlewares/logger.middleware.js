const logger = (req, res, next) => {
  req.time = new Date().toTimeString().split(" ")[0];
  console.log(
    "method :",
    req.method,
    "\n",
    "path :",
    req.path,
    "\n",
    "HostName :",
    req.hostname,
    "\n",
    "Time :",
    req.time,
    "\n\n"
  );
  return next();
};

module.exports = logger;
