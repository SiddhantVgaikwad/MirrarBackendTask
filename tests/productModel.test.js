// tests/productModel.test.js
const chai = require('chai');
const expect = chai.expect;
const Product = require('../models/productModel');

describe('Product Model', () => {
  it('should save a product to the database', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      price: 50,
      variants: [
        { name: 'Variant 1', sku: 'SKU123', additionalCost: 10, stockCount: 100 },
        { name: 'Variant 2', sku: 'SKU456', additionalCost: 20, stockCount: 50 },
      ],
    };

    const product = new Product(productData);
    await product.save();

    const savedProduct = await Product.findOne({ name: 'Test Product' });
    expect(savedProduct).to.exist;
    expect(savedProduct.name).to.equal(productData.name);
    expect(savedProduct.variants).to.have.lengthOf(2);
  });
  
});
