'use strict';

const infoProducts = [
    { name: 'Super Sale', sellIn: 12, price: 6, expected: { sellIn: 11, price: 4 } },
    { name: 'Super Sale', sellIn: 8, price: 3, expected: { sellIn: 7, price: 1 } },
    { name: 'Super Sale', sellIn: 3, price: 6, expected: { sellIn: 2, price: 4 } },
    { name: 'Super Sale', sellIn: 0, price: 2, expected: { sellIn: -1, price: 0 } },
    { name: 'Super Sale', sellIn: -1, price: 4, expected: { sellIn: -2, price: 0 } },
    { name: 'Super Sale', sellIn: 16, price: 10, expected: { sellIn: 15, price: 8 } },
];

module.exports = infoProducts;