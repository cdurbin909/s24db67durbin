var express = require("express");
const game_controllers = require("../controllers/game");
var router = express.Router();
/* GET costumes */
router.get("/", game_controllers.game_view_all_Page);
/* GET detail game page */
router.get("/detail", game_controllers.game_view_one_Page);
/* GET create game page */
router.get("/create", game_controllers.game_create_Page);
/* GET update game page */
router.get("/update", game_controllers.game_update_Page);
/* GET delete game page */
router.get("/delete", game_controllers.game_delete_Page);
module.exports = router;
