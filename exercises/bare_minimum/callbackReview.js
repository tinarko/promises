/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {

  fs.readFile(filePath, 'utf8', function(err, data) { 
  	if (err) {
  	  callback(err, null);
  	} else {
  	  var firstLine = data.split('\n')[0];
  	  callback(null, firstLine);
  	}
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(error, response, body) {
  	if (error) { 
  	  callback(error);
  	} else {
  	  callback(null, response.statusCode);
  	}
  });


  // why did this fail??
  // request.get(url)
  // .on('error', function(err) {
  // 	callback(err, null);
  	
  // })
  // .on('response', function (response) {
  // 	callback(null, response.statusCode);
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
