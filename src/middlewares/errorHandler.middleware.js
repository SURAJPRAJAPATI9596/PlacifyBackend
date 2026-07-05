const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.statusCode(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
};

module.exports = errorHandler;
