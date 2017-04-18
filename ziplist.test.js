const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

describe('zipList', function () {
  it('should return a single array of six elements', function () {
    chai.expect(zipList(test1, test2)).to.have.length(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipList(test1, test2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
  });
});

describe('zipListTheSimpleWay', function () {
  it('should return a single array of six elements', function () {
    chai.expect(zipListTheSimpleWay(test1, test2)).to.have.length(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipListTheSimpleWay(test1, test2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
  });
});


