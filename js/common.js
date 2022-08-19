function quantityFunction(quantity, isIncrease) {
    const anyQuantity = Number(document.getElementById(quantity).value);
    if(isIncrease) {
        document.getElementById(quantity).value = anyQuantity + 1;
    } else {
        document.getElementById(quantity).value = anyQuantity - 1;
    }
}

function setPriceFunction(quantityId, priceId, perPrice) {
    const anyQuantity = Number(document.getElementById(quantityId).value);
    document.getElementById(priceId).innerText = anyQuantity * perPrice;
}

function subTotalFunction() {
    const phonePrice = Number(document.getElementById('phone-price').innerText);
    const casePrice = Number(document.getElementById('case-price').innerText);
    document.getElementById('subtotalId').innerText = phonePrice + casePrice;

    taxCalculationFunction(10);
    totalCalculationFunction();
}

function taxCalculationFunction(tax) {
    const subTotal = Number(document.getElementById('subtotalId').innerText);
    document.getElementById('taxId').innerText = subTotal * tax / 100;
}

function totalCalculationFunction() {
    const subTotal = Number(document.getElementById('subtotalId').innerText);
    const tax = Number(document.getElementById('taxId').innerText);
    document.getElementById('totalId').innerText = subTotal + tax;
}