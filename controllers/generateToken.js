const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");

module.exports.GetToken = async (req, res) => {
    try {
        const {access_Key} = req.query
        if (!access_Key) {
            sendResponse(res, 400, "Please provide access_key")
        }
        else if (access_Key != "Vishal"){
            sendResponse(res, 400, "Please provide valid access_key")
        }
        const URL = 'https://dev-uomc1epv5ow80645.us.auth0.com/oauth/token';
        const headers = {
            'content-type': 'application/json'
        };

        await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                client_id: "ftAFt3voLHeg0b7hEKDvTBlfaICWk2Uj",
                client_secret: "-pGWsGFX0qVjEGXqFZhliguyVpE0XhWSGsWQwkklxZBZKBqD6p2FCn0daKA8ETGE",
                audience: "http://localhost:3000",
                grant_type: "client_credentials"
            })
        }).then( async(response)=>{
            const data = await  response.json();
            sendResponse(res, 200, "Success", `Bearer ${data.access_token}`)
        })
    } catch (error) {
        sendError(res, error, 500)
    }
}


