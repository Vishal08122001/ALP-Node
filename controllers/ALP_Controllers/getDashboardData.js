const { ProjectMaster } = require("../../models")
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");

module.exports.GetDashboardData = async (req, res) => {
    try {
        const {employeeCode} = req.query
        const Projects =  await ProjectMaster.findAll({
            where : {
                initiatorEmpCode : employeeCode
            }
        })
        sendResponse(res, 200, "Success", Projects)
    } catch (error) {
        sendError(res, error, 500)
    }
}