'use strict';

jest.mock('fs');

const reader = require('../src/__mocks__/reader.js');
const writer = require('../src/__mocks__/writer.js');

const upper = require('../src/app.js');

describe('Read a file', () => {
  it('Should return an error if the file path is bad.', (done) => {
    let file = '../../bad.txt';
    reader.readFile(file, (err, data) => {
      expect(err).toBeDefined();
      done();
    });
  });
  it('Should return a buffer from an existing file.', (done) => {
    let file = './demo.txt';
    reader.readFile(file, (err, data) => {
      expect(data).toBeDefined();
      done();
    });
  });
});

describe('Write a file', () => {
  it('Should return an error if the file path is bad.', (done) => {
    let file = '../../bad.txt';
    writer.writeFile(file, (err, data) => {
      expect(err).toBeDefined();
      done();
    });
  });
  it('Should return a buffer from an existing file.', (done) => {
    let file = './demo.txt';
    writer.writeFile(file, (err, data) => {
      expect(data).toBeDefined();
      done();
    });
  });
});

describe('Uppercase a string ', () => {
  it('Should return an all caps string', ()=> {
    let str = 'hello';
    expect(upper.toUpper(str)).toEqual(Buffer.from('HELLO'));
  });
  it('Should return null if it does not receive a string', ()=> {
    expect(upper.toUpper(5)).toBeNull();
  });
});
