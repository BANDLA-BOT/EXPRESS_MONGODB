"use strict";

var mongoose = require("mongoose");

var User = require("./user");

mongoose.connect("mongodb://localhost:27017/mongoose").then(function () {
  console.log("Connected to DB");
})["catch"](function (err) {
  console.log(err);
});

var createUser = function createUser() {
  var user;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findById("6662b435d348d3664cbe1fd3"));

        case 3:
          user = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

createUser();
//# sourceMappingURL=index.dev.js.map
