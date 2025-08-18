export default function FruitChild({ name, price, emoji, soldOut }) {
  return (
    <>
        <li>
            {emoji} {name} {price} { soldOut ? 'Sold Out' : "" }
        </li>
    </>
  );
}
