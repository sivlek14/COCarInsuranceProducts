'use strict';

const { megaCoveragePrice } = require('../utils/constants');

const fullCoverageProcess = product => {
    product.price = megaCoveragePrice;

    return product;
};

module.exports = fullCoverageProcess;
