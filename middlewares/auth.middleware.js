const jwt = require("jsonwebtoken");
const { promisify } = require("util");

let auth = async (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    let decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.staus(401).json({ message: "Token verification failed." });
  }
};

let restrictTo = (...roles) =>
  function (req, res, next) {
    if (!roles.includes(req.user.role))
      return res.status(401).json({ error: "unauthorized." });
    next();
  };

module.exports = { auth, restrictTo };
