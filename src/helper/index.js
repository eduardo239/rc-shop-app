export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function convertToCurrency(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
