const ProjectMilestones = require("./ProjectMilestone");
const { sq } = require("../../config/db");
const { DataTypes } = require("sequelize");
const ProjectContributors = require("./ProjectContributor");


const ProjectAttachment = sq.define("ProjectAttachment", {
    // Id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    attachment: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    contributorId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProjectContributors,
            key: "contributorId"
        }
    },
    milestoneId: { // Changed the foreign key field name
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProjectMilestones,
            key: "Id"
        }
    }
});




module.exports = ProjectAttachment