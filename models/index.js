const ProjectAttachment = require('./ALP_Models/ProjectAttachment');
const ProjectContributors = require('./ALP_Models/ProjectContributor');
const ProjectMaster = require('./ALP_Models/ProjectMaster');
const ProjectMilestones = require('./ALP_Models/ProjectMilestone');
const ProjectReviews = require('./ALP_Models/ProjectReview')
const { sq } = require("../config/db");

// Define associations
ProjectMaster.hasMany(ProjectReviews, { foreignKey: "projectId" });
ProjectMaster.belongsToMany(ProjectContributors, { through: "ProjectContributorProjectMaster" });
ProjectMaster.hasMany(ProjectMilestones, { foreignKey: "projectId" });
ProjectAttachment.belongsTo(ProjectMilestones, { foreignKey: "milestoneId" }); // Added association
ProjectContributors.belongsToMany(ProjectMaster, { through: "ProjectContributorProjectMaster" });
ProjectContributors.hasMany(ProjectAttachment, { foreignKey: "contributorId" })
ProjectMilestones.belongsTo(ProjectMaster, { foreignKey: "projectId" }); // Added association
ProjectMilestones.hasMany(ProjectAttachment, { foreignKey: "milestoneId" }); // Changed to milestoneId

// Sync models
async function syncModels() {
  try {
    await sq.sync({ alter: true });
    console.log("Models synced successfully");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
}

module.exports = {
  ProjectMaster,
  ProjectReviews,
  ProjectContributors,
  ProjectMilestones,
  ProjectAttachment,
  syncModels,
};