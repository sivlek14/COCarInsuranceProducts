'use strict';

const infoProducts = [
    { name: 'Full Coverage', sellIn: -1, price: 50, expected: { sellIn: -2, price: 50 } },
    { name: 'Special Full Coverage', sellIn: 6, price: 50, expected: { sellIn: 5, price: 50 } },
    { name: 'Super Sale', sellIn: -1, price: 8, expected: { sellIn: -2, price: 4 } },
];

module.exports = infoProducts;
