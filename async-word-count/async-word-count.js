var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function('./fileOne.txt', './fileTwo.txt', callback) {
  // YOUR CODE HERE
  getWordCount('./fileOne.txt', (err, count1) => {
    if(err) {
      console.log('Error caught while reading File One');
    } else {
      getWordCount('./fileTwo.txt', (err, count2) => {
        if(err) {
          console.log('Error caught while reading File Two')''
        } else {
          var totalCount = count1 + count2;
          callback(totalCount)
        }
      })
    }
  })
};

module.exports = getTotalWordCount;
