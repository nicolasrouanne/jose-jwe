const keyStr = require("./keyStr");
const jose = require("node-jose");

const payload = { foo: "bar", baz: "qux" };

const encryptHashValues = hash => {
  let encryptedHash = {};

  const encryptEntries = Object.entries(hash).map(([key, value]) =>
    encrypt(value).then(encryptedValue => {
      encryptedHash[key] = encryptedValue;
    })
  );
  return Promise.all(encryptEntries).then(() => encryptedHash);
};

const encrypt = input =>
  keystore.add(keyStr).then(key =>
    jose.JWE.createEncrypt({ format: "compact" }, key)
      .update(input)
      .final()
  );

encrypt("My Encrypted message").then(enc => console.log(enc));
encryptHashValues(payload).then(encryptedHash => console.log(encryptedHash));
