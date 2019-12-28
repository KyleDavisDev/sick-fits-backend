const cookieParser = require("cookie-parser");
require("dotenv").config();
console.log(process.env.PRISMA_ENDPOINT);
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// Transform ugly cookies into nice cookies
server.express.use(cookieParser());
//TODO: Use express middleware to populate the current user

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
