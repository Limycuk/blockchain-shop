/* global String */

export default price => {
  const textPrice = String(price);

  return `${textPrice.slice(0, -4)},${textPrice.slice(-4, -2)}€`;
};
