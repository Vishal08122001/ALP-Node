const { ProjectMilestones, ProjectContributors, ProjectAttachment } = require("../models")
const sendError = require("../utils/sendError")
const sendResponse = require("../utils/sendResponse")

module.exports.GetAttachments = async (req, res) => {
    try {
        const {contributorID} = req.query
        const result = await ProjectAttachment.findAll({
            where : {
                contributorId : contributorID,
            }
        })
        sendResponse(res, 200, "Success", result)
    } catch (error) {
        sendError(res, error, 500)
    }
}