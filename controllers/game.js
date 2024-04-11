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
// for a specific Game.
exports.game_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Game.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
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

// Handle Costume delete on DELETE.
exports.game_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Game.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle Game update form on PUT.
exports.game_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Game.findById(req.params.id);
    // Do updates of properties
    if (req.body.title) toUpdate.title = req.body.title;
    if (req.body.game_size) toUpdate.game_size = req.body.game_size;
    if (req.body.game_style) toUpdate.game_style = req.body.game_style;
    if (req.body.rating) toUpdate.rating = req.body.rating;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
  }
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

// Handle a show one view with id specified by query
exports.game_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await Game.findById(req.query.id);
    res.render("gameDetail", { title: "Game Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.game_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("gamecreate", { title: "Game Create" });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.game_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id);
  try {
    let result = await Game.findById(req.query.id);
    res.render("gameupdate", { title: "Game Update", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.game_delete_Page = async function (req, res) {
  console.log("Delete view for id " + req.query.id);
  try {
    result = await Game.findById(req.query.id);
    res.render("gamedelete", { title: "Game Delete", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
