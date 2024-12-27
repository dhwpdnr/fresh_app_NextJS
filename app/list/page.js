import Image from "next/image";

export default function List() {
  let item = ["Tomato", "Pasta", "Coconut"];
  let arr = [2, 3, 4];
  arr.map((a, i) => {});
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {item.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}