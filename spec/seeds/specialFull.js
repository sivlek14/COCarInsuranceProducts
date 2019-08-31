'use strict';

const infoProducts = [
    { name: 'Special Full Coverage', sellIn: 15, price: 20, expected: { sellIn: 14, price: 21 } },
    { name: 'Special Full Coverage', sellIn: 9, price: 20, expected: { sellIn: 8, price: 22 } },
    { name: 'Special Full Coverage', sellIn: 4, price: 20, expected: { sellIn: 3, price: 23 } },
    { name: 'Special Full Coverage', sellIn: -1, price: 20, expected: { sellIn: -2, price: 0 } },
    { name: 'Special Full Coverage', sellIn: 15, price: 50, expected: { sellIn: 14, price: 50 } },
    { name: 'Special Full Coverage', sellIn: 9, price: 50, expected: { sellIn: 8, price: 50 } },
    { name: 'Special Full Coverage', sellIn: 4, price: 50, expected: { sellIn: 3, price: 50 } },
    { name: 'Special Full Coverage', sellIn: -1, price: 50, expected: { sellIn: -2, price: 0 } },
];

module.exports = infoProducts;