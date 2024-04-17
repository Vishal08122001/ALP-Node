function sendError(res, error, status) {
    res.status(status || 500);
    res.json({
        code : 0,
        message: error.message || "Something went wrong",
    })
}

module.exports = sendError
