const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");


router.get("/", userController.getAllUsers);
router.get("/me/saved", auth, userController.getSavedUsers);

router.post("/:id/save", auth, userController.saveUser);
router.delete("/:id/save", auth, userController.removeSavedUser);

router.get("/:id", userController.getUserProfile);
router.get("/:id/reviews", userController.getUserReviews);

// existing routes...


module.exports = router;
