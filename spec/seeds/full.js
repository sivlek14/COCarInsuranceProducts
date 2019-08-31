'use strict';

const infoProducts = [
    { name: 'Full Coverage', sellIn: 15, price: 20, expected: { sellIn: 14, price: 21 } },
    { name: 'Full Coverage', sellIn: 9, price: 20, expected: { sellIn: 8, price: 21 } },
    { name: 'Full Coverage', sellIn: 4, price: 20, expected: { sellIn: 3, price: 21 } },
    { name: 'Full Coverage', sellIn: -1, price: 20, expected: { sellIn: -2, price: 22 } },
    { name: 'Full Coverage', sellIn: 15, price: 50, expected: { sellIn: 14, price: 50 } },
    { name: 'Full Coverage', sellIn: 9, price: 50, expected: { sellIn: 8, price: 50 } },
    { name: 'Full Coverage', sellIn: 4, price: 50, expected: { sellIn: 3, price: 50 } },
    { name: 'Full Coverage', sellIn: -1, price: 50, expected: { sellIn: -2, price: 50 } },
];

module.exports = infoProducts;
