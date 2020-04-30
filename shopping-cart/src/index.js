const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getPromotion(products) {
	const category = [];

	products.forEach(product => {
		if (!category.includes(product.category)) category.push(product.category)
	})

	return promotions[category.length - 1];
}

function getProductDetails(promotion, products) {
	let { totalPrice, totalRegularPrice } = products.reduce((productDetails, nextProduct) => {
		const productPromotionPrice = nextProduct.promotions.filter(promo => promo.looks.includes(promotion));

		if( productPromotionPrice[0]) {
			productDetails.totalPrice += productPromotionPrice[0].price;
		} else {
			productDetails.totalPrice += nextProduct.regularPrice;
		}

		productDetails.totalRegularPrice += nextProduct.regularPrice;

		return productDetails;
	}, {
		totalPrice: 0,
		totalRegularPrice: 0,
	})

	const optionsPercentage = {
		style: 'percent',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}

	const discount = Intl.NumberFormat('pt-BR', optionsPercentage).format(1 - totalPrice / totalRegularPrice);
	const discountValue = (totalRegularPrice - totalPrice).toFixed(2);
	totalPrice = Intl.NumberFormat().format(totalPrice);
	
	return {
		totalPrice,
		discountValue,
		discount
	}
}

function getShoppingCart(ids, productsList) {

	const filteredProducts = productsList.filter(product => {
		return ids.includes(product.id)
	})

	const promotion = getPromotion(filteredProducts)

	const { totalPrice, discountValue, discount } = getProductDetails(promotion, filteredProducts);

	const products = filteredProducts.map(product => ({
		name: product.name,
		category: product.category,
	}))

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	}
}

module.exports = { getShoppingCart };
