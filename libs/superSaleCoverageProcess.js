'use strict';

const { maxPrice } = require('../utils/constants');

const superSaleCoverageProcess = product => {
    if (product.price < maxPrice && product.price > 0)
        product.price -= 2;

    product.sellIn -= 1;
    
    if (product.sellIn < 0) 
        if (product.price > 0)
            product.price -= 2;

    return product;
};

module.exports = superSaleCoverageProcess;
