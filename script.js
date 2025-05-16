let products = [
    { id: 1, name: 'Curso 1', price: 10.99, img: 'img/foto1.jpg' },
    { id: 2, name: 'Curso 2', price: 12.50, img: 'img/foto2.jpg' },
    { id: 3, name: 'Curso 3', price: 15.00, img: 'img/foto3.jpg' },
    { id: 4, name: 'Curso 4', price: 18.75, img: 'img/foto4.jpg' },
    { id: 5, name: 'Curso 5', price: 20.00, img: 'img/foto5.jpg' },
    { id: 6, name: 'Curso 6', price: 9.99, img: 'img/foto6.jpg' },
    { id: 7, name: 'Curso 7', price: 14.30, img: 'img/foto7.jpg' },
    { id: 8, name: 'Curso 8', price: 17.45, img: 'img/foto8.jpg' },
    { id: 9, name: 'Curso 9', price: 22.00, img: 'img/foto9.jpg' },
];

let cart = [];

function renderProducts() {
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            <button>Adicionar ao carrinho</button>
        `;

        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        let product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ product, quantity: 1 });
        }
    }
    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector('.cart tbody');
    cartTable.innerHTML = '';

    cart.forEach(({ product, quantity }) => {
        let subtotal = product.price * quantity;
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>${quantity}</td>
            <td>R$ ${product.price.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
        `;
        cartTable.appendChild(cartRow);
    });

    updateTotal();
    updateCartCount();
}

function updateTotal() {
    let total = cart.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
});

function highlightText() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const text = product.textContent;
        const lowerText = text.toLowerCase();

        product.innerHTML = text;

        if (input !== "" && lowerText.includes(input)) {
            const regex = new RegExp(`(${input})`, "gi");
            product.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
        }
    });
}


renderProducts();