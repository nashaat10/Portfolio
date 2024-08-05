const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.createProject);

router
  .route("/:id")
  .get(projectController.getProject)
  .delete(projectController.deleteProject)
  .patch(projectController.updateProject);

module.exports = router;
