import { convertToCurrency } from "../helper";

function ItemPromo({ item, promoValid, discount }) {
  return (
    <>
      <h6>Preço</h6>
      {!promoValid ? (
        <>
          <h5 className="new-price">{convertToCurrency(item.price)}</h5>
        </>
      ) : (
        <>
          <p className="old-price">{convertToCurrency(item.price)}</p>
          <small>Preço com código promocional</small>
          <h5 className="new-price">
            {convertToCurrency(item.price - item.price * discount)}
          </h5>
        </>
      )}
    </>
  );
}

export default ItemPromo;
