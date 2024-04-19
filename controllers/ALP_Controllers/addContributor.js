const { ProjectContributors, ProjectMaster } = require("../../models");
const sendError = require("../../utils/sendError");
const sendResponse = require("../../utils/sendResponse");



module.exports.AddContributor = async (req, res) => {
    let { empCode, projectId, message, initiatorEmpCode } = req.query;
    try {
        await ProjectContributors.create({
            projectId: projectId,
            contributorEmployeeCode: empCode,
            message: message,
            isApproved: false,
            initiatorEmpCode: initiatorEmpCode,
        });
        sendResponse(res, 200, "Request Sent Successfully");
    } catch (error) {
        sendError(res, error);
    }
};

module.exports.ApproveRequest = async (req, res) => {
    const { projectId, empCode } = req.query;
    try {
        const project = await ProjectContributors.findOne({
            where: {
                projectId: projectId,
                contributorEmployeeCode: empCode,
            },
        });
        project.isApproved = true;
        await project.save().then(() => {
            addContributorToProject(projectId, project?.contributorId);
            sendResponse(res, 200, "Approved");
        });

    } catch (error) {
        sendError(res, error);
    }
};

const addContributorToProject = async (projectId, contributorId) => {
    try {
        const project = await ProjectMaster.findByPk(projectId);
        const contributor = await ProjectContributors.findByPk(contributorId);
        if (!project || !contributor) {
            throw new Error("Project or contributor not found");
        }
        // Associate the contributor with the project
        await project.addProjectContributor(contributor);
        console.log("Contributor added to project successfully");
    } catch (error) {
        console.error("Error adding contributor to project:", error);
    }
};
