const totalPriceElement = document.getElementById("total");
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get elements by their IDs
  const unitPriceElement = document.getElementById("unit-price-basket");
  const quantityElement = document.getElementById("quantity-basket");
  const plusButton = document.getElementById("plus-basket");
  const minusButton = document.getElementById("minus-basket");
  const trashButton = document.getElementById("trash-basket");
  const heartButton = document.getElementById("heart-basket");
  const productCard = document.getElementById("card-body-basket");

  // Initialize quantity and unit price
  let quantity = 0;
  const unitPrice = parseInt(unitPriceElement.textContent);

  // Increase quantity
  plusButton.addEventListener("click", () => {
    quantity += 1;
    quantityElement.textContent = quantity;
    totalPriceElement.textContent =
      parseInt(totalPriceElement.textContent) + unitPrice;
  });

  // Decrease quantity
  minusButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity -= 1;
      quantityElement.textContent = quantity;
      totalPriceElement.textContent =
        parseInt(totalPriceElement.textContent) - unitPrice;
    }
  });

  // Remove product
  trashButton.addEventListener("click", () => {
    productCard.remove();
    // Reset total price to 0 when the product is removed
    totalPriceElement.textContent = "0 $";
  });

  // Toggle wishlist state
  heartButton.addEventListener("click", () => {
    heartButton.style.color = "red";
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get elements by their IDs

  const unitPriceElement = document.getElementById("unit-price-socks");
  const quantityElement = document.getElementById("quantity-socks");
  const plusButton = document.getElementById("plus-socks");
  const minusButton = document.getElementById("minus-socks");
  const trashButton = document.getElementById("trash-socks");
  const heartButton = document.getElementById("heart-socks");
  const productCard = document.getElementById("card-body-socks");

  // Initialize quantity and unit price
  let quantity = 0;
  const unitPrice = parseInt(unitPriceElement.textContent);

  // Increase quantity
  plusButton.addEventListener("click", () => {
    quantity += 1;
    quantityElement.textContent = quantity;
    totalPriceElement.textContent =
      parseInt(totalPriceElement.textContent) + unitPrice;
  });

  // Decrease quantity
  minusButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity -= 1;
      quantityElement.textContent = quantity;
      totalPriceElement.textContent =
        parseInt(totalPriceElement.textContent) - unitPrice;
    }
  });

  // Remove product
  trashButton.addEventListener("click", () => {
    productCard.remove();
    // Reset total price to 0 when the product is removed
    totalPriceElement.textContent = "0 $";
  });

  // Toggle wishlist state
  heartButton.addEventListener("click", () => {
    heartButton.style.color = "red";
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get elements by their IDs
  const unitPriceElement = document.getElementById("unit-price-bag");
  const quantityElement = document.getElementById("quantity-bag");
  const plusButton = document.getElementById("plus-bag");
  const minusButton = document.getElementById("minus-bag");
  const trashButton = document.getElementById("trash-bag");
  const heartButton = document.getElementById("heart-bag");
  const productCard = document.getElementById("card-body-bag");

  // Initialize quantity and unit price
  let quantity = 0;
  const unitPrice = parseInt(unitPriceElement.textContent);

  // Update total price
  const updateTotalPrice = () => {
    totalPriceElement.textContent = `${quantity * unitPrice} $`;
  };

  // Increase quantity
  plusButton.addEventListener("click", () => {
    quantity += 1;
    quantityElement.textContent = quantity;
    totalPriceElement.textContent =
      parseInt(totalPriceElement.textContent) + unitPrice;
  });

  // Decrease quantity
  minusButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity -= 1;
      quantityElement.textContent = quantity;
      totalPriceElement.textContent =
        parseInt(totalPriceElement.textContent) - unitPrice;
    }
  });

  // Remove product
  trashButton.addEventListener("click", () => {
    productCard.remove();
    // Reset total price to 0 when the product is removed
    totalPriceElement.textContent = "0 $";
  });

  // Toggle wishlist state
  heartButton.addEventListener("click", () => {
    heartButton.style.color = "red";
  });
});
