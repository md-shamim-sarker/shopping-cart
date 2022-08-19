document.getElementById('phone-plus').addEventListener('click', () => {
    quantityFunction('phone-quantity', true);
    setPriceFunction('phone-quantity', 'phone-price', 1000);
    subTotalFunction();
});

document.getElementById('phone-minus').addEventListener('click', () => {
    quantityFunction('phone-quantity', false);
    setPriceFunction('phone-quantity', 'phone-price', 1000);
    subTotalFunction();
});

