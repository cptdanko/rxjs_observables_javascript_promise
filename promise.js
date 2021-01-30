let orderArray = ["Order 1 - adssKitchen item",
                "Order 2 - Nintendo Switch Game",
                "Order 3 - Javascript Algorithms book"];

let ordersPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      orderArray.push("Order 4 - LG Gram 14 Laptop");
      if(orderArray.includes("Order 1 - Kitchen item")) {
        resolve(orderArray);
      } else {
        reject("Error: order missing");
      }
  }, 5000);
});

ordersPromise.then(ordersArr => {
  ordersArr.forEach(orderStr => {
    console.log(`Order name ${orderStr}`);
  });
}).catch(err => {
  console.error(err);
});
