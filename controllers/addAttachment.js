const { ProjectAttachment } = require("../models")
const sendError = require("../utils/sendError")

module.exports.AddAttachments = async (req, res) => {
    try {
        const {attachment, contributorId, } = req.body
        if(!attachment)
        ProjectAttachment.create(req.body)
    } catch (error) {
        sendError(res, error, 500)
    }
}