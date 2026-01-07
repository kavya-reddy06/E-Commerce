import { useEffect, useState } from "react";

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/cart?userId=1")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h2>My Cart</h2>

      {items.map(item => (
        console.log(item),
        <div key={item.cartItemId}>
          <p>{item.product?.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
