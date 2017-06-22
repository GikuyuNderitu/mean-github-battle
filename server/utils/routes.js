const users = require('./../controllers/users.js');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/users', users.index);

	app.post('/users', users.create);

	app.delete('/users', users.removeAll);

	app.all("*", (req, res) => {
		res.redirect("/");
	})

};
