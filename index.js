document.getElementById("calculate").addEventListener('click', getProducts);

function getProducts() {
  const product1Quantity = parseInt(document.getElementById('product1').value) || 0;
  const product2Quantity = parseInt(document.getElementById('product2').value) || 0;
  const product3Quantity = parseInt(document.getElementById('product3').value) || 0;
  const totalQuantity = product1Quantity + product2Quantity + product3Quantity;
  const giftWrapCheckbox = document.getElementById('giftWrap');
  const isGiftWrapSelected = giftWrapCheckbox.checked;
// multiplying number of products with their prices
  const product1Price = product1Quantity * 20;
  const product2Price = product2Quantity * 40;
  const product3Price = product3Quantity * 50;
  const subtotal = product1Price + product2Price + product3Price;

  let totalCost = subtotal;
  let discountName = '';
  let discountAmount = 0;
// flat $10 discount if total cost > 200
  if (totalCost > 200) {
    totalCost -= 10; // Apply flat $10 discount
    discountName = 'flat_10_discount';
    discountAmount = 10;
  } else if (product1Quantity > 10 || product2Quantity > 10 || product3Quantity > 10) { 
    const maxProductPrice = Math.max(product1Price, product2Price, product3Price);
    const discount = maxProductPrice * 0.05; // 5% discount calculate
    totalCost -= discount;
    discountName = 'bulk_5_discount';
    discountAmount = discount;
  }
//  If total quantity exceeds 20 units applying a 10% discount on the cart total.
  if (totalQuantity > 20) {
    const discount = totalCost * 0.1; // Calculate 10% discount
    totalCost -= discount;
    discountName = 'bulk_10_discount';
    discountAmount = discount;
  }
// if totalQuantity exceeds 30 or any product Quantity exceeds 15
  if (totalQuantity > 30 && (product1Quantity > 15 || product2Quantity > 15 || product3Quantity > 15)) {
    const quantityAbove15 = Math.max(product1Quantity - 15, 0) + Math.max(product2Quantity - 15, 0) + Math.max(product3Quantity - 15, 0);
    const discount = quantityAbove15 * 0.5 * 50; // Calculate 50% discount
    totalCost -= discount;
    discountName = 'tiered_50_discount';
    discountAmount = discount;
  }
// shipping fee 10units in 1 package for $5;
  const shippingFee = Math.ceil(totalQuantity / 10) * 5;
// giftWrap Fee
  const giftWrapFee = isGiftWrapSelected ? totalQuantity : 0;
  const total = totalCost + shippingFee + giftWrapFee;
document.getElementById('product1Output').innerText=`Product 1: Quantity=${product1Quantity}, Total=$${product1Price}`
document.getElementById('product2Output').innerText=`Product 2: Quantity=${product2Quantity}, Total=$${product2Price}`
document.getElementById('product3Output').innerText=`Product 3: Quantity=${product3Quantity}, Total=$${product3Price}`
//   console.log(`Product 1: Quantity=${product1Quantity}, Total=${product1Price}`);
//   console.log(`Product 2: Quantity=${product2Quantity}, Total=${product2Price}`);
//   console.log(`Product 3: Quantity=${product3Quantity}, Total=${product3Price}`);
document.getElementById('subTotalOutput').innerText=`Subtotal: $${subtotal}`
document.getElementById('discountAppliedOutput').innerText=`Discount Applied: ${discountName}, Amount: $${discountAmount}`
document.getElementById('shippingFeeOutput').innerText=`Shipping Fee: $${shippingFee}`
document.getElementById('giftWrapFeeOutput').innerText=`Gift Wrap Fee: $${giftWrapFee}`
document.getElementById('totalOutput').innerText=`Total: $${total}`

//   console.log(`Subtotal: ${subtotal}`);
//   console.log(`Discount Applied: ${discountName}, Amount: ${discountAmount}`);
//   console.log(`Shipping Fee: ${shippingFee}`);
//   console.log(`Gift Wrap Fee: ${giftWrapFee}`);
//   console.log(`Total: ${total}`);
}
