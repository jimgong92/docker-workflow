var expect = require('chai').expect;
var request= require('superttest')('http://localhost:8000');

describe('API', function(){
	it('should add to the count', function(done){
		request.post('/api/count')
			.send({})
			.end(function(err, res){
				var count = JSON.parse(res.text).count;
				expect(count).to.equal(1);
				done();
			});
	});
});