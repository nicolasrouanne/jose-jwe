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

const encrypt = (input, format = "compact") =>
  jose.JWK.asKey(keyStr).then(key =>
    jose.JWE.createEncrypt({ format }, key)
      .update(input)
      .final()
  );

encrypt("My Encrypted message").then(enc => console.log(`Compact:\n${enc}\n`));
encrypt("My Encrypted message", "flattened").then(enc => {
  console.log("JSON:");
  console.log(enc);
  console.log("\n");
});
encryptHashValues(payload).then(encryptedHash => console.log(encryptedHash));
