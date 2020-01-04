const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log(process.env.PRISMA_ENDPOINT);
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// Transform ugly cookies into nice cookies
server.express.use(cookieParser());

// decode the JWT so we can get userID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }

  // Keep chuggin'!
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  function(info) {
    console.log(`Server is now running on http://localhost:${info.port}`);
  }
);
