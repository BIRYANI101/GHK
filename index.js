




// FEATURED SECTION

      
    // Paste the JavaScript code from the section below here, or link to an external script
    document.addEventListener('DOMContentLoaded', () => {
      const cartButtons = document.querySelectorAll('.cart-icon button');

      cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          const productCard = event.target.closest('.product-card');
          const productName = productCard.querySelector('.product-name').textContent;
          const productPrice = productCard.querySelector('.price').textContent;

          alert(`Added "${productName}" priced at ${productPrice} to your cart!`);
        });
      });
    });
 