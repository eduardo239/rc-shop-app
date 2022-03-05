export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const convertToCurrency = (value) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const checkIfObjectIsInArrayOrder = (id, color, storage, array) => {
  return array.some((item) => {
    return item._id === id && item.color === color && item.storage === storage;
  });
};

/**
 *
 * @param {String} promo
 * @param {Float} setDiscount
 * @param {Boolean} setPromoValid
 */
export const promoCode = (promo, setDiscount, setPromoValid) => {
  switch (promo) {
    case "PROMO10":
      setPromoValid(true);
      setDiscount(0.1);
      break;
    case "PROMO20":
      setPromoValid(true);
      setDiscount(0.2);
      break;
    default:
      setPromoValid(false);
      setDiscount(1);
      break;
  }
};
