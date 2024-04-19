const { auth } = require('express-oauth2-jwt-bearer')
require('dotenv').config()



const checkJwt = auth({
  audience: 'https://alp_node.com',
  issuerBaseURL: 'https://dev-uomc1epv5ow80645.us.auth0.com',
  tokenSigningAlg: 'RS256'
});

module.exports = {
  checkJwt,
}