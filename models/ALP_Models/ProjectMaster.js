// models/index.js
const { sq } = require("../../config/db");
const { DataTypes } = require("sequelize");
const ProjectReviews = require("./ProjectReview");
const ProjectContributors = require("./ProjectContributor");
const ProjectMilestones = require("./ProjectMilestone");



const ProjectMaster = sq.define("ProjectMaster", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  approvedBy: {
    type: DataTypes.STRING(100),
  },
  markComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  initiatorEmpCode: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
})





module.exports = ProjectMaster