export const validateEmail = (email) => {
  const regex = new RegExp("^[a-z0-9._-]+@[a-z]+\\.[a-z]{2,3}$");
  return regex.test(email);
};
