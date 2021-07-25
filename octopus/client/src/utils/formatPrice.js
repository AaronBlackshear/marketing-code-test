// Num is price in pennies
const formatPrice = (num) => {
  if (typeof num === "number") return num / 100;
  return null;
};

export default formatPrice;