document.getElementById('case-plus').addEventListener('click', () => {
    quantityFunction('case-quantity', true);
    setPriceFunction('case-quantity', 'case-price', 100);
    subTotalFunction();
});

document.getElementById('case-minus').addEventListener('click', () => {
    quantityFunction('case-quantity', false);
    setPriceFunction('case-quantity', 'case-price', 100);
    subTotalFunction();
});