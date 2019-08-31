class Product {

    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

}

class CarInsurance {

    constructor(products = []) {
        /* CONST */
        this.maxPrice = 50;
        this.megaCoveragePrice = 80;
        /*END CONST */
        this.products = products;
        this.coverageTypes = {
            fullCov: 'Full Coverage',
            specialFullCov: 'Special Full Coverage',
            megaCov: 'Mega Coverage',
        };
    }

    updatePrice() {
        const {
            maxPrice,
            megaCoveragePrice,
            coverageTypes,
            products,
        } = this;

        products.forEach(product => {
            const { name } = product;
            const isFCov = (name === coverageTypes.fullCov);
            const isSFCov = (name === coverageTypes.specialFullCov);
            const isMCov = (name === coverageTypes.megaCov);

            if (!isFCov && !isSFCov) {
                if (product.price > 0)
                    if (!isMCov)
                        product.price = product.price - 1;
            } else {
                if (product.price < maxPrice) {
                    product.price += 1;

                    if (isSFCov) {
                        if (product.sellIn < 11)
                            if (product.price < maxPrice)
                                product.price += 1;

                        if (product.sellIn < 6)
                            if (product.price < maxPrice)
                                product.price += 1;
                    }
                }
            }

            if (!isMCov)
                product.sellIn -= 1;

            if (product.sellIn < 0) {
                if (!isFCov) {
                    if (!isSFCov) {
                        if (product.price > 0)
                            if (!isMCov)
                                product.price -= 1;
                    } else
                        product.price = 0;
                } else {
                    if (product.price < maxPrice)
                        product.price += 1;
                }
            }

            if (isMCov)
                product.price = megaCoveragePrice;
        });

        return this.products;
    }

}

module.exports = {
    Product,
    CarInsurance,
};
