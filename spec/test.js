import chai from 'chai';
chai.should();

describe('chai should', function() {

  it('string', () => {
    const foo = 'foo';
    foo.should.be.a('string');
    foo.should.equal('foo');
    foo.should.have.length(3);
  });

  it('object', () => {
    const foo = {
      tea: ['aaa', 'bbb']
    };
    foo.should.have.property('tea').with.length(2);
  });

  it('combine assertions', () => {
    const foo = 'foo';
    foo.should.with.length(3)
      .have.length(3)
      .be.a('string')
      .equal('foo');
  });

});