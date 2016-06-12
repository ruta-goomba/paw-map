'use strict';
var app = require('../app');
var request = require('supertest')(app);
describe('testing routes...', function () {
  it('responds to /', function testHome(done) {
    request
      .get('/')
      .expect(200, done);
  });
  it('404 everything else', function testNonExistingRoute(done) {
    console.log('test 404')
    request
      .get('/foo/bar')
      .expect(404, done);
  });
});
