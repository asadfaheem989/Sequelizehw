var mysql = require('mysql');
var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: "Generic123",
		database: "burgers_db"
	},
	jawsDB: {
		port: 3306,		
		host: '',
		user: '',
		password: "",
		database: ""

     }
  }

var connection = mysql.createConnection( source.jawsDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
