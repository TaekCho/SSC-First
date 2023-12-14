import Card from "./Card";

export default function CardGroup({ children }) {
  return (
    <div>
      <Card updated={5}></Card>
      <Card updated={26}></Card>
      <Card updated={60}></Card>
    </div>
  );
}
