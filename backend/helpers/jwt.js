const jwt = require("jsonwebtoken");
const secretKey = "secret";

const signPayloadToToken = (payload) => jwt.sign(payload, secretKey);
const verifyToken = (token) => jwt.verify(token, secretKey);

module.exports = { signPayloadToToken, verifyToken };