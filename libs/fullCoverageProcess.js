'use strict';

const { maxPrice } = require('../utils/constants');

const fullCoverageProcess = product => {
    if (product.price < maxPrice)
        product.price += 1;

    product.sellIn -= 1;

    if (product.sellIn < 0 && product.price < maxPrice)
        product.price += 1;

    return product;
};

module.exports = fullCoverageProcess;
