var dbUrl = "library";
var collections = ["users"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
