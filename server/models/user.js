'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	score: Number,
	username: String
})
const User = mongoose.model('User', UserSchema)
