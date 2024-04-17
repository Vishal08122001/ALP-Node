// A utility function for sending responses
function sendResponse(res, statusCode, message, data = null) {
    res.status(statusCode).json({ code: statusCode === 200 ? 1 : 0, message, data });
}

module.exports = sendResponse