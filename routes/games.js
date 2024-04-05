var express = require("express");
const game_controllers = require("../controllers/game");
var router = express.Router();
/* GET costumes */
router.get("/", game_controllers.game_view_all_Page);
module.exports = router;
