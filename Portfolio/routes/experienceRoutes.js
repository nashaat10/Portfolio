const experienceController = require("../controllers/experienceController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(experienceController.getAllExperiences)
  .post(experienceController.createExperience);

router
  .route("/:id")
  .get(experienceController.getExperience)
  .patch(experienceController.updateExperience)
  .delete(experienceController.deleteExperience);

module.exports = router;
