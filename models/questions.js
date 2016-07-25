var connect = require('./connect.js'),
	mongoose = require('mongoose');
	
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
	id: String,
	question: String,
	img_src: String,
	sex: String,
	answer: Array
});
var QuestionModel = connect.model('Question', QuestionSchema);
var QuestionDAO = function(){};

QuestionDAO.prototype.save = function (obj){
	var instance = new QuestionModel(obj);
	return instance.save();
}

QuestionDAO.prototype.find = function (obj){
	return QuestionModel.find(obj).exec();
}

QuestionDAO.prototype.delete = function (obj){
	return QuestionModel.remove(obj);
}

module.exports = new QuestionDAO();