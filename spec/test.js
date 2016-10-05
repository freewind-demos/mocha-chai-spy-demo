import chai from 'chai';
import spies  from 'chai-spies';

chai.should();
chai.use(spies);

describe('chai should', function() {

  it('spy', () => {
    const spy = chai.spy();
    spy('aaa');
    spy.should.have.been.called.with('aaa');
  });

});