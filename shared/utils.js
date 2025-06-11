// Utility functions shared across backend

const getCurrentTimestamp = () => {
  return new Date().toISOString();
};

const generateUsername = (email) => {
  return email.split("@")[0].toLowerCase() + Math.floor(Math.random() * 1000);
};

module.exports = {
  getCurrentTimestamp,
  generateUsername
};
