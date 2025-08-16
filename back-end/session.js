const session = require("express-session");

const sessionMiddleware = (session({
    secret: "lmsSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false,
        httpOnly: true
    }
}));

module.exports = sessionMiddleware;