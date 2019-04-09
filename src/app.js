'use strict';

const events = require('./event-pool.js');
require('./logger.js');


const fs = require('fs');
const util = require('util');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

/**
 * Read in a file
 * @param  {} file
 * @param  {} =>{returnreadFile(file
 */
let readIn = (file) => {
  return readFile(file);
}; 
/**
 * Uppercase and Buffer the input
 * @param  {} str
 * @param  {} =>{letres=Buffer.from(str.toString(
 * @param  {} .toUpperCase(
 */
let toUpper = (str) => {
  if(typeof str != 'string'){return null;}
  let res = Buffer.from(str.toString().toUpperCase());
  return res;
};
/**
 * Write a file given a file and an input.
 * @param  {} file
 * @param  {} data
 * @param  {} =>{returnwriteFile(file
 * @param  {} data
 */
let writeOut = (file, data) => {
  return writeFile(file, data);
};
/**
 * The wrapper for the promise functions. 
 * @param  {} file
 * @param  {} =>{readIn(file
 * @param  {} .then(result=>{result=toUpper(result
 * @param  {} ;writeOut(file
 * @param  {} result
 * @param  {} .then(events.emit('success'
 * @param  {} 'Fileread
 * @param  {} edited
 * @param  {} andrewrittensuccessfully'
 * @param  {} ;}
 * @param  {} .catch(error=>events.emit('error'
 * @param  {} error
 */
let alterFile = (file) => {
  readIn(file)
    .then(result => {
      result = toUpper(result);
      writeOut(file, result)
        .then(events.emit('success', 'File read, edited, and rewritten successfully'));
    })
    .catch(error => events.emit('error', error));
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = {readIn, toUpper, writeOut};