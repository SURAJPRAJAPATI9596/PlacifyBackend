const logger = (req, res, next) => {
  req.time = Date(Date.now().toString());
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
    "path :",
    req.time,
    "\n\n"
  );
  return next();
};

module.exports = logger;
