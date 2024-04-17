const { ProjectMaster, ProjectContributors, ProjectReviews, ProjectMilestones } = require("../models")
const sendError = require("../utils/sendError")
const sendResponse = require("../utils/sendResponse")

module.exports.GetAllProjects = async (req, res) => {
    try {
        let projects = await ProjectMaster.findAll({
            include : [ProjectContributors, ProjectReviews, ProjectMilestones],
        })
        sendResponse(res, 200, "Success", projects)
    } catch (error) {
        sendError(res, error, 500)
    }
}