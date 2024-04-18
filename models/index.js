// models/index.js
const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");


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



const ProjectReviews = sq.define("ProjectReviews", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING(500)
  }
})


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


const ProjectMilestones = sq.define("ProjectMilestone", {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  projectId : {
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



// Define associations
ProjectMaster.hasMany(ProjectReviews, { foreignKey: "projectId" });
ProjectContributors.belongsToMany(ProjectMaster, { through: "ProjectContributorProjectMaster" });
ProjectMaster.belongsToMany(ProjectContributors, { through: "ProjectContributorProjectMaster" });
ProjectMaster.hasMany(ProjectMilestones, { foreignKey: "projectId" });
ProjectMilestones.belongsTo(ProjectMaster, { foreignKey: "projectId" }); // Added association
ProjectMilestones.hasMany(ProjectAttachment, { foreignKey: "milestoneId" }); // Changed to milestoneId
ProjectAttachment.belongsTo(ProjectMilestones, { foreignKey: "milestoneId" }); // Added association
ProjectContributors.hasMany(ProjectAttachment, {foreignKey : "contributorId"})



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