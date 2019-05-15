const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');

chai.use(chaiHttp);
const expect = chai.expect;

server.listen(4444);

describe('loopback server', function () {
  this.timeout(5000);

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('responds to /api/players', (done) => {
    chai.request(server)
      .get('/api/players')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('responds to /teams', (done) => {
    chai.request(server)
      .get('/api/teams')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

})