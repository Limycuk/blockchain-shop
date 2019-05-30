import formatPrice from "~/services/formatPrice";

export default price => {
  if (price <= 0) {
    return 0;
  }

  const formattedPrice = formatPrice(price);

  const decimalPart = parseInt(formattedPrice.split(",")[0]);
  if (decimalPart >= 100) {
    return "99€+";
  }

  return formattedPrice;
};
