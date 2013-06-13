var db = require("../database.js");

exports.users = {};

exports.index = function(req, res) {
  res.render("index");
};

/*
 * GET all users
 */
exports.users.all = function(req, res) {
  db.users.find(function(err, users) {
    if(err) return;
    res.json(users);
  });
};

/*
 * GET one user
 */
// exports.users.one = function(req, res) {
//   db.users.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, user) {
//     if(err) return;
//     res.json(user);
//   });
// };

// exports.users.create = function(req, res) {
//   res.json(req.body);
//   db.users.save(req.body);
// };
