document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('purchaseForm');
  if (!form) return;

  const activeSkuEl = document.getElementById('activeSku');
  const totalOldPriceEl = document.getElementById('totalOldPrice');
  const totalCurrentPriceEl = document.getElementById('totalCurrentPrice');

  function updateCardData(radioInput) {
    const sku = radioInput.getAttribute('data-sku');
    const price = radioInput.getAttribute('data-price');
    const oldPrice = radioInput.getAttribute('data-old-price');

    const formatter = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2
    });

    if (activeSkuEl) activeSkuEl.textContent = sku;
    if (totalCurrentPriceEl) totalCurrentPriceEl.textContent = formatter.format(price);

    if (totalOldPriceEl) {
      if (oldPrice) {
        totalOldPriceEl.textContent = formatter.format(oldPrice);
        totalOldPriceEl.style.display = 'inline';
      } else {
        totalOldPriceEl.style.display = 'none';
      }
    }
  }

  form.addEventListener('change', (event) => {
    if (event.target && event.target.name === 'packing') {
      updateCardData(event.target);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkedRadio = form.querySelector('input[name="packing"]:checked');
    alert(`Товар добавлен в корзину! Фасовка: ${checkedRadio.value}г, Артикул: ${checkedRadio.getAttribute('data-sku')}`);
  });

  const buyButtons = document.querySelectorAll('.product-card__row-buy-btn');
  buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); 
      e.stopPropagation(); 

      const countEl = button.querySelector('.product-card__cart-count');
      let currentCount = parseInt(countEl.textContent, 10);
      countEl.textContent = currentCount + 1;

      const row = button.closest('.product-card__packing-row');
      const radio = row.querySelector('.product-card__radio-hidden');
      radio.checked = true;
      radio.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
});
