var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');

var sign = mongoose.Schema({

      Name     : {type : String, required: true},
      Email    : {type : String, required: true, index: {unique: true}},
      Password : {type : String, required: true},
      Mobile   : {type : Number, required: true},
      Dates    : {type : Number, required: true},
      Month    : {type : String, required: true},
      Year     : {type : Number, required: true},
      Gender   : {type : String, required: true}

  });

var Sign = module.exports = mongoose.model("Sign", sign);

module.exports.database = function (data, callback) {
    var salt = bcrypt.genSalt(10, function (err, salt) {
      var hash =  bcrypt.hash(data.Password, salt, function(err, hash) {
                    data.Password = hash;
                      data.save(callback);
          });
      });
}