const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];


const getPromotion = products => promotions[[...new Set(products.map(product => product.category))].length - 1];

const getCartProducts = (ids, productsList) => productsList.filter(product => ids.includes(product.id));

const getDiscount = (regularPrice, totalPrice) => 
	Intl.NumberFormat('pt-BR', {
		style: 'percent',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(1 - totalPrice / regularPrice);

const getTotalPriceWithoutDiscount = products =>
	products
		.map(product => product.regularPrice)
		.reduce((sum, next) => sum + next, 0);


const getTotalPrice = (promotion, products) => 
	products.reduce((totalPrice, nextProduct) => {
		const PromotionPrice = nextProduct.promotions.filter(promo => promo.looks.includes(promotion));

		if(PromotionPrice[0]) {
			totalPrice += PromotionPrice[0].price;
		} else {
			totalPrice += nextProduct.regularPrice;
		}

		return totalPrice;
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

	console.log(promotion, discount, discountValue, totalPrice, products);

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	}
}

module.exports = { getShoppingCart };