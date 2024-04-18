const { ProjectMaster, ProjectReviews, ProjectContributors, ProjectMilestones, ProjectAttachment } = require("../models");
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");



module.exports.GetProjectDetails = async (req, res) => {
    const { id } = req.query
    try {
        if (!id) {
           sendError(res, {}, 401)
        }
        else {
            ProjectMaster.findAll({
                include : [ProjectContributors, ProjectReviews, ProjectMilestones],
                where : {
                    id : id
                }

            }).then((data) => {
               sendResponse(res, 200, "Success", data)
            })
        }
    } catch (error) {
        sendError(res, error, 500)
    }
}