var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(table, cb) {
    //not sure what this is for
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function(err, result) {
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, newBurger, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + newBurger + "', false)";
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, whichBurger, cb) {
        var queryString = 'UPDATE ' + table + ' SET devoured = true WHERE id = ' + whichBurger;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
