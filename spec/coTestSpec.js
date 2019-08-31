const { expect, assert } = require('chai');

const { CarInsurance, Product } = require('../src/coTest');

describe('CO Test', () => {
    it('Evict null products', () => {
        assert.throws(
            () => {
                new CarInsurance(null);
            },
            TypeError,
            'products must be an Array'
        );
    });

    it('Empty Products', () => {
        const coTest = new CarInsurance();

        expect(coTest.products).length(0);
    });

    it('Evict CarInsurance with instances distinct of Product', () => {
        const coTest = new CarInsurance([ new Product('Super Sale', 10, 16), '', {} ]);

        assert.throws(
            () => {
                coTest.updatePrice();
            },
            TypeError,
            'All products must be an instance of Product'
        );
    });

    it('First day 0 to 1', () => {
        const infoProducts = require('./seeds/firstDay');
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

    it('Sells expired', () => {
        const infoProducts = require('./seeds/salesExpired');
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
        const infoProducts = require('./seeds/maxPrices');
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
        const infoProducts = require('./seeds/lowPrices');
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
        const infoProducts = require('./seeds/mega');
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
        const infoProducts = require('./seeds/full');
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
        const infoProducts = require('./seeds/specialFull');
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

    it('Super Sale Coverage', () => {
        const infoProducts = require('./seeds/superSale');
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
