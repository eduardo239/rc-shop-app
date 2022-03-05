import { convertToCurrency } from "../helper";

function ItemTitle({ item }) {
  return (
    <div className="item-wrapper__title">
      <h4>{item.name}</h4>
      <p>{convertToCurrency(item.price)}</p>
    </div>
  );
}

export default ItemTitle;
