const { ProjectMilestones } = require("../models")
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");

module.exports.AddMilestones = async (req, res) => {
    try {
        const {milestones} = req.body 
        for (const milestone of milestones) {
            await ProjectMilestones.create({
                projectId: milestone.projectId,
                mileTitle: milestone.mileTitle,
                startDate: milestone.startDate
            });
        }
        sendResponse(res, 200, "Mile Added")
    } catch (error) {
        sendError(res, error, 500)
        console.log(error)
    }
}

