const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const getPromotion = products => promotions[[new Set(products.map(product => product.category)).size - 1]];

const getCartProducts = (ids, productsList) => productsList.filter(product => ids.includes(product.id));

const getDiscount = (regularPrice, totalPrice) => 
	Intl.NumberFormat('pt-BR', {
		style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2
	}).format(1 - totalPrice / regularPrice);

const getTotalPriceWithoutDiscount = products =>
	products
		.map(product => product.regularPrice)
		.reduce((sum, next) => sum + next, 0);

const getTotalPrice = (promotion, products) => 
	products.reduce((totalPrice, nextProduct) => {
		const promotionPrice = nextProduct.promotions.find(promo => promo.looks.includes(promotion)) || [];
		return totalPrice += promotionPrice.price || nextProduct.regularPrice;
	}, 0)

const mapProductToNameAndCategory = products =>
	products.map(product => ({
		name: product.name,
		category: product.category,
	}))

const getShoppingCart = (ids, productsList) => {
	const cartProducts = getCartProducts(ids, productsList);
	const promotion = getPromotion(cartProducts);
	const discount = getDiscount(getTotalPriceWithoutDiscount(cartProducts), getTotalPrice(promotion, cartProducts));
	const discountValue = (
		getTotalPriceWithoutDiscount(cartProducts) - getTotalPrice(promotion, cartProducts)
	).toFixed(2);
	const totalPrice = Intl.NumberFormat().format(getTotalPrice(promotion, cartProducts));
	const products = mapProductToNameAndCategory(cartProducts);

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	}
}

module.exports = { getShoppingCart };