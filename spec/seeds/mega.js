'use strict';

const infoProducts = [
    { name: 'Mega Coverage', sellIn: -1, price: 80, expected: { sellIn: -1, price: 80 } },
    { name: 'Mega Coverage', sellIn: 4, price: 80, expected: { sellIn: 4, price: 80 } },
    { name: 'Mega Coverage', sellIn: 40, price: 80, expected: { sellIn: 40, price: 80 } },
    { name: 'Mega Coverage', sellIn: -1, price: 30, expected: { sellIn: -1, price: 80 } },
    { name: 'Mega Coverage', sellIn: 4, price: 64, expected: { sellIn: 4, price: 80 } },
    { name: 'Mega Coverage', sellIn: 40, price: 1, expected: { sellIn: 40, price: 80 } },
];

module.exports = infoProducts;
