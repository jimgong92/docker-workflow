var expect = require('chai').expect;
var request= require('supertest')('http://localhost:8000');

describe('API', function(){
	it('should add to the count', function(done){
		request.get('/api/count')
			.end(function(err, res){
				var count = JSON.parse(res.text).count;
				expect(count).to.equal(1);
				done();
			});
	});
});