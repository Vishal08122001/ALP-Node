const { sq } = require("../../config/db");
const { DataTypes } = require("sequelize");


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


module.exports = ProjectReviews