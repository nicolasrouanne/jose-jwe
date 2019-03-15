const encrypt = require("./encrypt");

const encryptHashValues = hash => {
  let encryptedHash = {};

  const encryptEntries = Object.entries(hash).map(([key, value]) =>
    encrypt(value).then(encryptedValue => {
      encryptedHash[key] = encryptedValue;
    })
  );
  return Promise.all(encryptEntries).then(() => encryptedHash);
};

module.exports = encryptHashValues;
