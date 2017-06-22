const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	index: function (req, res) {
		User.find({},(err, users) =>{
			if(err) return res.status(500).json(err);

			console.log('querried DB');
			//  users
			console.log(users);
			return res.json(users)
		})
	},

	create: function(req, res) {
		const body = req.body;

		User.findOne({username: body.username}, (err, obj) => {
			if(obj) return;

			let user = new User(body);
			user.save((err, user) => {
				if(err) return res.status(400).json(err);

				console.log(user);
				return res.json(user);
			})
		})
	},

	removeAll: function(req, res) {
		User.remove({}, err => {
			if (err) return res.status(400).json(err);
			return res.json({success: "success"})

		})
	}
}
