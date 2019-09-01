'use strict';

const defaultCoverageProcess = product => {
    if (product.price > 0)
        product.price -= 1;

    product.sellIn -= 1;

    if (product.sellIn < 0 && product.price > 0)
        product.price -= 1;

    return product;
};

module.exports = defaultCoverageProcess;
