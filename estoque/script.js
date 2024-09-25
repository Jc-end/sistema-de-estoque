const products = {};

function addProduct() {
    const name = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('product-quantity').value);

    if (name && !isNaN(quantity) && quantity > 0) {
        if (products[name]) {
            products[name] += quantity;
        } else {
            products[name] = quantity;
        }
        document.getElementById('product-name').value = '';
        document.getElementById('product-quantity').value = '';
        updateProductList();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function withdrawProduct() {
    const name = document.getElementById('withdraw-product-name').value;
    const quantity = parseInt(document.getElementById('withdraw-quantity').value);

    if (name && !isNaN(quantity) && quantity > 0) {
        if (products[name] && products[name] >= quantity) {
            products[name] -= quantity;
            if (products[name] === 0) {
                delete products[name];
            }
            document.getElementById('withdraw-product-name').value = '';
            document.getElementById('withdraw-quantity').value = '';
            updateProductList();
        } else {
            alert('Quantidade insuficiente ou produto não encontrado.');
        }
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function updateProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (const [name, quantity] of Object.entries(products)) {
        const li = document.createElement('li');
        li.textContent = `${name}: ${quantity}`;
        productList.appendChild(li);
    }
}
