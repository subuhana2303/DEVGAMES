// Reusable input validators

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValidPassword = (password) => {
  return password.length >= 6;
};

module.exports = {
  isValidEmail,
  isValidPassword
};
