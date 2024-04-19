const { ProjectContributors, ProjectAttachment } = require("../../models")
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");

module.exports.getContributorRequest = async (req, res) => {
    try {
        const { projectId } = req.query
        const requests = await ProjectContributors.findAll({
            include : [ProjectAttachment],
            where: { projectId: projectId }
        })
        sendResponse(res, 200, "Success", requests)

    } catch (error) {
        sendError(res, error, 500)
    }
}