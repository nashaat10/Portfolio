const userController = require("../controllers/userController");
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signUp", authController.signUp);
router.post("/login", authController.login);

router.use(authController.protect);

router.route("/").get(userController.getAllUsers);
// .post(userController.createUser);

router.get("/me", userController.getMe, userController.getUser);

router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
