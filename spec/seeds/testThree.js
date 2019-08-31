'use strict';

const infoProducts = [
    { name: 'Full Coverage', sellIn: -1, price: 50, expected: { sellIn: -2, price: 50 } },
    { name: 'Special Full Coverage', sellIn: 6, price: 50, expected: { sellIn: 5, price: 50 } },
];

module.exports = infoProducts;
