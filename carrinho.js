document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const cart = document.getElementById('cart');
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let total = 0;
    let itemCount = 0;

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function showCart() {
        cart.classList.remove('hidden');
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartHandler);
    });

    function addToCartHandler(event) {
        const button = event.target;
        button.disabled = true; // Desabilita o botão para evitar cliques repetidos

        const productBox = event.target.closest('.box');
        const productName = productBox.querySelector('h3').textContent.trim();
        const productPriceText = productBox.querySelector('.price').textContent.trim();
        const productPrice = parseFloat(productPriceText.replace('Kz', '').replace(',', '.'));
        const productImageSrc = productBox.querySelector('.image img').getAttribute('src');

        let cartItem = cartItems.querySelector(`[data-name="${productName}"]`);
        if (cartItem) {
            const quantityElement = cartItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            cartItem.querySelector('.item-price').textContent = `${(productPrice ).toFixed(3)}Kz`; // Calcula o preço dividido por 5
        } else {
            cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.setAttribute('data-name', productName);
            cartItem.innerHTML = `
                <img src="${productImageSrc}" alt="${productName}">
                <span>${productName}</span>
                <span class="item-price">${(productPrice ).toFixed(3)}Kz</span> <!-- Calcula o preço dividido por 5 -->
                <span class="quantity">1</span>
                <span class="remove">🗑️</span>
            `;
            cartItems.appendChild(cartItem);
        }

        total += productPrice ; // Adiciona o preço dividido por 5 ao total
        itemCount++;
        updateCartCount();
        totalElement.textContent = `Total: ${total.toFixed(3)}Kz`;

        showCart();

        cartItem.querySelector('.remove').addEventListener('click', () => {
            const quantityElement = cartItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                cartItem.querySelector('.item-price').textContent = `${(productPrice  * quantity).toFixed(3)}Kz`; // Atualiza o preço calculado
            } else {
                cartItems.removeChild(cartItem);
            }
            total -= productPrice ; // Subtrai o preço dividido por 5 do total
            itemCount--;
            updateCartCount();
            totalElement.textContent = `Total: ${total.toFixed(3)}Kz`;
            if (itemCount === 0) {
                cart.classList.add('hidden');
            }
        });

        button.disabled = false; // Habilita o botão após o processamento
    }
});
