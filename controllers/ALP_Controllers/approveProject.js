const { ProjectMaster } = require("../../models")
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");

module.exports.ApproveProject = async (req, res) => {
    try {
        const { projectId } = req.body
        const project = await ProjectMaster.findByPk(projectId)
        if (!project) {
            return sendError(res, "Project not found", 404)
        }
        project.isApproved = true
        await project.save()
        sendResponse(res, 200, "Success", null)
    } catch (error) {
        sendError(res, error, 500)
    }
}