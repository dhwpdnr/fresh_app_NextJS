import { age, name } from "./data.js";
import Hi from "./hi.js";
export default function Cart() {
  let carts = ["Tomato", "Pasta"];
  return (
    <div>
      <Banner card="롯데카드" />
      <Banner card="현대카드" />
      <h1 className="title">장바구니</h1>
      <Hi />
      {carts.map((a, i) => {
        return <CartItem itemName={a} />;
      })}
    </div>
  );
}
function Banner(props) {
  return <p>{props.card} 무이자 이벤트 중</p>;
}
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.itemName}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Btn(props) {
  return <button style={{ background: props.color }}>버튼임</button>;
}
