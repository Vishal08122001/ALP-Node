const { AddContributor, ApproveRequest } = require("../controllers/addContributor");
const { AddMilestones } = require("../controllers/addMilestone");
const { ApproveProject } = require("../controllers/approveProject");
const { AddProjectMaster } = require("../controllers/createProject");
const { GetAllProjects } = require("../controllers/getAllProjects");
const { getContributorRequest } = require("../controllers/getContributorRequest");
const { GetProjectDetails } = require("../controllers/getProjectDetails");
const { ProjectReviews } = require("../controllers/projectReviews");
const router = require("express").Router();


router.post('/createProject', AddProjectMaster)
router.post('/addReview', ProjectReviews)
router.get('/getprojectDetails', GetProjectDetails)
router.post('/addContributor', AddContributor)
router.post('/approveContributor', ApproveRequest)
router.get('/getContributors', getContributorRequest)
router.get('/getallProjects', GetAllProjects)
router.post('/approveProjects', ApproveProject)
router.post('/addMilestones', AddMilestones)

module.exports = router