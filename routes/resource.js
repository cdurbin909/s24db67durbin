var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var game_controller = require("../controllers/game");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// GAME ROUTES ///
// POST request for creating a Game.
router.post("/game", game_controller.game_create_post);
// DELETE request to delete Costume.
router.delete("/games/:id", game_controller.game_delete);
// PUT request to update Costume.
router.put("/games/:id", game_controller.game_update_put);
// GET request for one Costume.
router.get("/games/:id", game_controller.game_detail);
// GET request for list of all Costume items.
router.get("/games", game_controller.game_list);
module.exports = router;
