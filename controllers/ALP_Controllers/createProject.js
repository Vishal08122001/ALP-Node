const { ProjectMaster } = require("../../models")
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");


module.exports.AddProjectMaster = async (req, res) => {
    try {
        let { title, description, location, duration, startDate, initiatorEmpCode } = req.query;
        if (title === undefined || description === undefined || location === undefined || duration === undefined || startDate === undefined || initiatorEmpCode == undefined) {
            res.send("Please provide valid fields");
        } else {
            ProjectMaster.create(req.query )
                .then((data) => {
                    sendResponse(res, 200, "Data Added", data)
                })
                .catch((err) => {
                    console.log(err);
                    sendError(res, err)
                });
        }
    } catch (error) {
        sendError(res, error)
    }
};
