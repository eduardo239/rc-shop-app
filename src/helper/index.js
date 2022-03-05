import apis from "../api";

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

/**
 *
 * @param {Object} item
 * @param {Object} userInfo
 * @param {String} setMessage
 * @param {Function} setUserInfo
 * @returns
 */
export const addItemToFavorites = async (
  item,
  userInfo,
  setMessage,
  setUserInfo
) => {
  try {
    const payload = { favoriteId: item._id };
    const {
      data: { response },
    } = await apis.checkIfItemIsFavorite(userInfo.uid, payload);

    if (response) {
      setMessage("Este item já está adicionado aos favoritos.");
      return;
    } else {
      try {
        const payload = {
          _id: item._id,
        };
        const response = await apis.addToFavorite(userInfo.uid, payload);
        if (response.status === 200) {
          setMessage("Item adicionado aos favoritos");
          setUserInfo(response.data.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {Object} item
 * @param {Object} userInfo
 * @param {String} setMessage
 * @param {Function} setUserInfo
 */
export const removeItemFromFavorites = async (
  item,
  userInfo,
  setMessage,
  setUserInfo
) => {
  try {
    const response = await apis.removeFromFavorites(userInfo.uid, item._id);
    console.log(response.data.data);
    if (response.status === 200) {
      setMessage("Item removido dos favoritos");
      setUserInfo(response.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
