import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const reactDescription = ["Fundamental", "core", "Crucial"];

export default function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {description} React the concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
