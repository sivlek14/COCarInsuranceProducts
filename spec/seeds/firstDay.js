'use strict';

const infoProducts = [
    { name: 'Medium Coverage', sellIn: 10, price: 20, expected: { sellIn: 9, price: 19 } },
    { name: 'Full Coverage', sellIn: 2, price: 0, expected: { sellIn: 1, price: 1 } },
    { name: 'Low Coverage', sellIn: 5, price: 7, expected: { sellIn: 4, price: 6 } },
    { name: 'Mega Coverage', sellIn: 0, price: 80, expected: { sellIn: 0, price: 80 } },
    { name: 'Mega Coverage', sellIn: -1, price: 80, expected: { sellIn: -1, price: 80 } },
    { name: 'Special Full Coverage', sellIn: 15, price: 20, expected: { sellIn: 14, price: 21 } },
    { name: 'Special Full Coverage', sellIn: 10, price: 49, expected: { sellIn: 9, price: 50 } },
    { name: 'Special Full Coverage', sellIn: 5, price: 49, expected: { sellIn: 4, price: 50 } },
    { name: 'Super Sale', sellIn: 3, price: 6, expected: { sellIn: 2, price: 4 } },
];

module.exports = infoProducts;
