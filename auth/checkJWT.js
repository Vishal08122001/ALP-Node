const { auth } = require('express-oauth2-jwt-bearer')
require('dotenv').config()



const checkJwt = auth({
  audience: process.env.audience,
  issuerBaseURL: process.env.issuerBaseURL,
  tokenSigningAlg: process.env.tokenSigningAlg
});

module.exports = {
  checkJwt,
}