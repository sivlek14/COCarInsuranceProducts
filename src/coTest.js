'use strict';

const fullCoverageProcess = require('../libs/fullCoverageProcess');
const specialFullCoverageProcess = require('../libs/specialFullCoverageProcess');
const superSaleCoverageProcess = require('../libs/superSaleCoverageProcess');
const megaCoverageProcess = require('../libs/megaCoverageProcess');
const defaultCoverageProcess = require('../libs/defaultCoverageProcess');

class Product {

    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

}

class CarInsurance {

    constructor(products = []) {
        if (!Array.isArray(products))
            throw new TypeError('products must be an Array');

        this.products = products;
        this.coverageTypes = {
            fullCov: 'Full Coverage',
            specialFullCov: 'Special Full Coverage',
            megaCov: 'Mega Coverage',
            superSaleCov: 'Super Sale',
        };
    }

    updatePrice() {
        const {
            coverageTypes,
            products,
        } = this;

        products.forEach(product => {
            if (!(product instanceof Product))
                throw new TypeError('All products must be an instance of Product');

            const { name } = product;

            switch (name) {

            case coverageTypes.fullCov:
                product = fullCoverageProcess(product);
                break;
            case coverageTypes.specialFullCov:
                product = specialFullCoverageProcess(product);
                break;
            case coverageTypes.megaCov:
                product = megaCoverageProcess(product);
                break;
            case coverageTypes.superSaleCov:
                product = superSaleCoverageProcess(product);
                break;
            default:
                product = defaultCoverageProcess(product);
                break;

            }
        });

        return this.products;
    }

}

module.exports = {
    Product,
    CarInsurance,
};
