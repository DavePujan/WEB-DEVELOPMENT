const products = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 50 },
    { id: 3, name: 'Shoes', price: 80 },
];

const calculateItemTotal = (productId, quantity) => {
    const product = products.find((p) => p.id === productId);
    return product.price * quantity;
};

export const calculateTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        const itemTotal = calculateItemTotal(item.productId, item.quantity);
        total += itemTotal;
    });

    return total;
};
