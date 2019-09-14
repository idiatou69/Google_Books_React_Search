const router = require("express").Router();
const googlebooks = require("../../controllers/googlebooks");

//currently hitting /api/google/
router.route("/")
  .get(googlebooks.findAll);

module.exports = router;
  