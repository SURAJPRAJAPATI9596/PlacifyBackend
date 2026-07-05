const logger = (req, res, next) => {
  req.time = Date(Date.now().toString());
  console.log(
    "Request method :",
    req.method,
    "\n",
    "Request path :",
    req.path,
    "\n",
    "Request HostName :",
    req.hostname,
    "\n",
    "Request path :",
    req.time,
    "\n\n"
  );
  return next();
};

module.exports = logger;
