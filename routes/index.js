
/*
 * GET home page.
 */



exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sendmail = function(req, res) {
/*	res.render('sendmail', {
		title : 'Express2'
	});*/
	res.send("success");
};