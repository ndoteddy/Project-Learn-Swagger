var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://NANDO:master123@localhost:5432/tshirt';
var db = pgp(connectionString);

// add query functions
module.exports = {
  getAllTshirt: getAllTshirt,
  getSingleTshirt: getSingleTshirt,
  createTshirt: createTshirt  
};

function getAllTshirt(req, res, next) {
  db.any('select * from tshirt')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Tshirt'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleTshirt(req, res, next) {
  var tshirtID = parseInt(req.params.id);
  db.one('select * from tshirt where id = $1', tshirtID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE tshirt'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createTshirt(req, res, next) {
  req.body.price = parseInt(req.body.price);
  db.none('insert into tshirt(name, picture, price)' +
      'values(${name}, ${picture}, ${price})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one tshirt'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}