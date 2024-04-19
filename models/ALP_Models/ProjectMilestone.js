const { sq } = require("../../config/db");
const ProjectAttachment = require("./ProjectAttachment");
const ProjectMaster = require("./ProjectMaster");
const { DataTypes } = require("sequelize");


const ProjectMilestones = sq.define("ProjectMilestone", {
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mileTitle: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
})



module.exports = ProjectMilestones