const {auth, requiredScopes} = require('express-oauth2-jwt-bearer')
require('dotenv').config();


const checkJwt = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.IssuerBaseURL,
    tokenSigningAlg: process.env.tokenSigningAlg
  });

const checkScopes = requiredScopes('read:messages');
module.exports = {
    checkJwt,
    checkScopes
}