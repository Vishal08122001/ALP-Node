const { ProjectReviews } = require("../models")
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");


module.exports.ProjectReviews = async (req, res) => {
    try {
        const { projectId, rating, comment } = req.query
        if (!projectId || !rating || !comment) {
            sendError(res, { message: "Please provide all details" }, 403)
        } else {
            ProjectReviews.create(req.query).then((data) => {
                sendResponse(res, 200, "Success", data)
            }).catch((err) => {
                sendError(res, err, 403)
            })
        }
    } catch (error) {
        sendError(res, error, 500)
    }
}
