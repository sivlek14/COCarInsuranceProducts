const expect = require('chai').expect;

const { CarInsurance, Product } = require('../src/coTest');

describe('CO Test', () => {
    it('Empty Products', () => {
        const coTest = new CarInsurance();

        expect(coTest.products).length(0);
    });

    it('First day 0 to 1', () => {
        const infoProducts = require('./seeds/testOne');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('sellIns Expired', () => {
        const infoProducts = require('./seeds/testTwo');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('Max Prices, never more that 50', () => {
        const infoProducts = require('./seeds/testThree');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('Low prices, never should be 0', () => {
        const infoProducts = require('./seeds/testFour');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('Mega Coverage', () => {
        const infoProducts = require('./seeds/testFive');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('Full Coverage', () => {
        const infoProducts = require('./seeds/testSix');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });

    it('Special Full Coverage', () => {
        const infoProducts = require('./seeds/testSeven');
        const arrayOfProducts = infoProducts.map(
            product => new Product(
                product.name,
                product.sellIn,
                product.price
            )
        );
        const coTest = new CarInsurance(arrayOfProducts);

        coTest.updatePrice().forEach((product, i) => {
            expect(product.sellIn).equal(infoProducts[i].expected.sellIn);
            expect(product.price).equal(infoProducts[i].expected.price);
        });
    });
});
