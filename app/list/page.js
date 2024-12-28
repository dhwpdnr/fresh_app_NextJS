"use client";

import { useState } from "react";

export default function List() {
  let item = ["Tomato", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {item.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span> {count[i]} </span>
            <button
              onClick={() => {
                let countCp = [...count];
                countCp[i]--;
                setCount(countCp);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                let countCp = [...count];
                countCp[i]++;
                setCount(countCp);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
