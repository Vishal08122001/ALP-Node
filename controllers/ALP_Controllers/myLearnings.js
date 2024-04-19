const { ProjectContributors, ProjectMilestones, ProjectMaster } = require("../../models")
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");

module.exports.MyLearnings = async (req, res) => {
    try {
        const {employeeCode} = req.query
        const Contributor = await ProjectContributors.findAll({
            where: {
                contributorEmployeeCode : employeeCode,
                isApproved : true
            },
        });
        const Projects = await ProjectMaster.findAll({
            where : {
                isApproved : true
            }
        })

        const Data = {
            learning : Contributor,
            listProject : Projects
        }
        sendResponse(res, 200, "Success", Data)
    } catch (error) {
        sendError(res, error, 500)
    }
}