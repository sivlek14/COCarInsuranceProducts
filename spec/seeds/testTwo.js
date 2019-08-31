'use strict';

const infoProducts = [
    { name: 'Low Coverage', sellIn: -1, price: 7, expected: { sellIn: -2, price: 5 } },
    { name: 'Medium Coverage', sellIn: -1, price: 20, expected: { sellIn: -2, price: 18 } },
    { name: 'Full Coverage', sellIn: -1, price: 0, expected: { sellIn: -2, price: 2 } },
    { name: 'Special Full Coverage', sellIn: -1, price: 20, expected: { sellIn: -2, price: 0 } },
    { name: 'Mega Coverage', sellIn: -1, price: 80, expected: { sellIn: -1, price: 80 } },
];

module.exports = infoProducts;
