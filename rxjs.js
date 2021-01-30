import { Observable } from 'rxjs';

const customerOrders = new Observable(subscriber => {
  subscriber.next("Order 1 - Kitchen item");
  subscriber.next("Order 2 - Nintendo Switch Game");
  subscriber.next("Order 3 - Javascript Algorithms book");
  setTimeout(()=> {
    subscriber.next("Order 4 - LG Gram 14 Laptop");
    subscriber.complete();
  }, 5000)
});
function getCustomerOrders() {
  return customerOrders;
}

let orders = getCustomerOrders();
orders.subscribe({
  next(orderStr) { console.log(orderStr);},
  error(err) { console.error(err); },
  complete() { console.log("Orders fetched"); }
});
