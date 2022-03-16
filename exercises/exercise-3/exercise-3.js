let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function totalCostOfItem(quantity, unitPrice) {
  let eachItemTotal = 0;
  eachItemTotal = quantity * unitPrice;
  return eachItemTotal;
};

function orderReceipt(order) {
  let total = 0;
  console.log('QTY   ITEM                    TOTAL');

  order.forEach(({itemName, quantity, unitPrice}) => {
    let itemTotal = totalCostOfItem(quantity, unitPrice);
    total += itemTotal;

    console.log(
      `${quantity}     ${itemName}               ${itemTotal.toFixed(2)}`
    );
  })
  console.log("");
  console.log(`Total: ${total}`);
}

orderReceipt(order);