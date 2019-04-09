'use strict';

module.exports = exports = {};
/**
 * Mock the write file function
 * @param  {} file
 * @param  {} cb
 * @param  {} =>{if(file.match(/bad/i
 * @param  {} {cb('InvalidFile'
 * @param  {} ;}else{cb(undefined
 * @param  {} newBuffer('FileContents'
 */
exports.writeFile = (file, cb) => {
  if( file.match(/bad/i) ){
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};
