export const validateNumber = (number) => {
  const regex = /^[6789]\d{9}$/;
  return regex.test(number);
};
