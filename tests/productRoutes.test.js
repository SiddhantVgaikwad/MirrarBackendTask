// tests/productRoutes.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Product = require('../models/productModel');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Product Routes', () => {
  beforeEach((done) => {
    // Clear the database before each test
    Product.deleteMany({}, (err) => {
      done();
    });
  });

  it('should create a new product', (done) => {
    chai
      .request(app)
      .post('/api/products')
      .send({
        name: 'Product 1',
        description: 'Description 1',
        price: 50,
        variants: [
          { name: 'Variant 1', sku: 'SKU123', additionalCost: 10, stockCount: 100 },
          { name: 'Variant 2', sku: 'SKU456', additionalCost: 20, stockCount: 50 },
        ],
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name').eql('Product 1');
        // Add more assertions as needed
        done();
      });
  });
  
});
