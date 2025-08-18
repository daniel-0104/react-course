import FruitChild from "./FruitChild";

export default function Fruits() {
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎", soldOut: false },
    { name: "orange", price: 20, emoji: "🍊", soldOut: true },
    { name: "grape", price: 3, emoji: "🍇", soldOut: false },
    { name: "pineappple", price: 40, emoji: "🍍", soldOut: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <FruitChild
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
