const { AddAttachments } = require("../controllers/addAttachment");
const { AddContributor, ApproveRequest } = require("../controllers/addContributor");
const { AddMilestones } = require("../controllers/addMilestone");
const { ApproveProject } = require("../controllers/approveProject");
const { AddProjectMaster } = require("../controllers/createProject");
const { GetAllProjects } = require("../controllers/getAllProjects");
const { GetAttachments } = require("../controllers/getAttachment");
const { getContributorRequest } = require("../controllers/getContributorRequest");
const { GetProjectDetails } = require("../controllers/getProjectDetails");
const { ProjectReviews } = require("../controllers/projectReviews");
const {checkJwt, checkScopes} = require('../auth/checkJWT');
const { GetToken } = require("../controllers/generateToken");
const router = require("express").Router();

router.get('/generateToken', GetToken)
router.post('/createProject', checkJwt, AddProjectMaster)
router.post('/addReview', checkJwt, ProjectReviews)
router.get('/getprojectDetails', GetProjectDetails)
router.post('/addContributor', checkJwt, AddContributor)
router.post('/approveContributor', checkJwt, ApproveRequest)
router.get('/getContributors', getContributorRequest)
router.get('/getallProjects',checkJwt, GetAllProjects)
router.post('/approveProjects', checkJwt, ApproveProject)
router.post('/addMilestones', checkJwt, AddMilestones)
router.post('/addAttachment', checkJwt, AddAttachments)
router.get('/getAttachment',checkJwt,  GetAttachments)
module.exports = router