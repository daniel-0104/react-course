import Welcome from "./Welcome";
import Code from "./Code";

export default function Conditional() {
  const display = true;
  return display ? <Welcome /> : <Code />;
}
