exports.getweight = function (req, res){
	healthData.find(function(err, healthdata) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)

		//res.json(healthdata); // return all scribbles in JSON format
		res.send(healthdata);
    });
};
exports.updateweight = function (req, res){
	//get users' data form the input text area from main page
	var now=new Date();
	//sent the data to the database and update the database
	healthData.create({
		userid: req.body.newid,
		wg:[{date: now.tolocalstring, weight: req.body.newweight}]

	});
};

module.exports = exports;
