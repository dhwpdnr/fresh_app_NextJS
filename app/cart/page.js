import { age, name } from "./data.js";
import Hi from "./hi.js";
export default function Cart() {
  return (
    <div>
      <h1 className="title">장바구니</h1>
      <Hi />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
