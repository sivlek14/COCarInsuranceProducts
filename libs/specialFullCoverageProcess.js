'use strict';

const { maxPrice } = require('../utils/constants');

const specialFullCoverageProcess = product => {
    if (product.price < maxPrice) {
        product.price += 1;

        if (product.sellIn < 11 && product.price < maxPrice)
            product.price += 1;
    
        if (product.sellIn < 6 && product.price < maxPrice)
            product.price += 1;
    }

    product.sellIn -= 1;

    if (product.sellIn < 0)
        product.price = 0;

    return product;
};

module.exports = specialFullCoverageProcess;
