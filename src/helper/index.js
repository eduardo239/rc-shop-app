export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const convertToCurrency = (value) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const checkIfObjectIsInArrayOrder = (id, color, storage, array) => {
  return array.some((item) => {
    return item._id === id && item.color === color && item.storage === storage;
  });
};
