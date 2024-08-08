const experienceController = require("../controllers/experienceController");
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

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
