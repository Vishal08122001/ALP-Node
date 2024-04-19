const axios = require('axios');
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");
require('dotenv').config();

module.exports.GetToken = async (req, res) => {
    try {
        const { access_Key } = req.query;
        if (!access_Key) {
            sendResponse(res, 400, "Please provide access_key");
        } else if (access_Key !== "Vishal") {
            sendResponse(res, 400, "Please provide valid access_key");
        } else {
            const URL = 'https://dev-uomc1epv5ow80645.us.auth0.com/oauth/token';
            const headers = {
                'content-type': 'application/json'
            };

            const data = JSON.stringify({
                client_id: process.env.CLIENT_ID,
                client_secret: "GlU-h4XvejgA_5QWVFvN25oyrhWePhLGCzdxt44MSfgcyjBHEad9gULw-Cr2hWw3",
                audience: "https://alp_node.com",
                grant_type: "client_credentials"
            });

            const response = await axios.post(URL, data, { headers });
            sendResponse(res, 200, "Success", `Bearer ${response.data.access_token}`);
        }
    } catch (error) {
        console.log(error)
        sendError(res, error, 500);
    }
};
