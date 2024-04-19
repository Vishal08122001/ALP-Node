const ProjectAttachment = require("./ProjectAttachment");
const ProjectMaster = require("./ProjectMaster");
const { sq } = require("../../config/db");
const { DataTypes } = require("sequelize");



const ProjectContributors = sq.define("ProjectContributors", {
    contributorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contributorEmployeeCode: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    message: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    isApproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    initiatorEmpCode: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    rejectionComments: {
        type: DataTypes.STRING(200)
    },
    // approvedDate: {
    //   type: DataTypes.DATEONLY,
    //   defaultValue: DataTypes.DATEONLY
    // }
})




module.exports = ProjectContributors