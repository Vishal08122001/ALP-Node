const { ProjectAttachment, ProjectMilestones } = require("../models");
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");

module.exports.AddAttachments = async (req, res) => {
    try {
        const { attachment, contributorId, milestoneId } = req.body;
        if (!attachment || !contributorId || !milestoneId) {
            // If attachment, contributorId, or milestoneId is missing in the request body, send an error response
            return sendError(res, "Attachment, contributorId, or milestoneId is missing", 400);
        }

        // Check if the milestone exists
        const milestone = await ProjectMilestones.findByPk(milestoneId);
        if (!milestone) {
            return sendError(res, "Milestone not found", 404);
        }

        // Create the attachment record
        const newAttachment = await ProjectAttachment.create({
            attachment,
            contributorId,
            milestoneId
        });

        // Send success response with the newly created attachment
        sendResponse(res, 200, "Success", newAttachment);
    } catch (error) {
        // If any error occurs during the process, send an error response
        sendError(res, error, 500);
        console.log(error);
    }
};
