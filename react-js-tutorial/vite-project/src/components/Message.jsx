export default function Message() {
  function handleClick() {
    console.log("button was clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
