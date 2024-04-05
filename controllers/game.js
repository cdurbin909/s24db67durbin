var Game = require("../models/game");
// List of all Games
exports.game_list = async function (req, res) {
  try {
    theGames = await Game.find();
    res.send(theGames);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific Costume.
exports.game_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Game detail: " + req.params.id);
};

// Handle Game create on POST.
exports.game_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Game();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.title = req.body.title;
  document.game_size = req.body.game_size;
  document.game_style = req.body.game_style;
  document.rating = req.body.rating;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume delete from on DELETE.
exports.game_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Game delete DELETE " + req.params.id);
};
// Handle Costume update form on PUT.
exports.game_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Game update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.game_view_all_Page = async function (req, res) {
  try {
    theGames = await Game.find();
    res.render("games", {
      title: "Game Search Results",
      results: theGames,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
