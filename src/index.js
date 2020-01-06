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

// Find user who is requesting
server.express.use(async (req, res, next) => {
  // Keep going if not logged in
  if (!req.userId) return next();

  // find user
  const user = await db.query.user(
    { where: { id: req.userId } },
    "{id, permissions, email, name}"
  );

  // attach user to request
  req.user = user;
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
