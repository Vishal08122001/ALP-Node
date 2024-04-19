const { AddAttachments } = require("../controllers/ALP_Controllers/addAttachment");
const {checkJwt} = require('../auth/checkJWT');
const { AddContributor, ApproveRequest } = require("../controllers/ALP_Controllers/addContributor");
const { AddMilestones } = require("../controllers/ALP_Controllers/addMilestone");
const { ApproveProject } = require("../controllers/ALP_Controllers/approveProject");
const { AddProjectMaster } = require("../controllers/ALP_Controllers/createProject");
const { GetAllProjects } = require("../controllers/ALP_Controllers/getAllProjects");
const { GetAttachments } = require("../controllers/ALP_Controllers/getAttachment");
const { getContributorRequest } = require("../controllers/ALP_Controllers/getContributorRequest");
const { GetProjectDetails } = require("../controllers/ALP_Controllers/getProjectDetails");
const { ProjectReviews } = require("../controllers/ALP_Controllers/projectReviews");
const { GetToken } = require("../controllers/ALP_Controllers/generateToken");
const { GetDashboardData } = require("../controllers/ALP_Controllers/getDashboardData");
const { MyLearnings } = require("../controllers/ALP_Controllers/myLearnings");
const router = require("express").Router();

router.get('/generateToken', GetToken)
router.post('/createProject', checkJwt, AddProjectMaster)
router.get('/getDashboardData', checkJwt, GetDashboardData )
router.get('/myLearnings', checkJwt, MyLearnings)
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