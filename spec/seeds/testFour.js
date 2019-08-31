'use strict';

const infoProducts = [
    { name: 'Low Coverage', sellIn: 1, price: 0, expected: { sellIn: 0, price: 0 } },
    { name: 'Low Coverage', sellIn: -1, price: 0, expected: { sellIn: -2, price: 0 } },
    { name: 'Medium Coverage', sellIn: 1, price: 0, expected: { sellIn: 0, price: 0 } },
    { name: 'Medium Coverage', sellIn: -1, price: 0, expected: { sellIn: -2, price: 0 } },
];

module.exports = infoProducts;
