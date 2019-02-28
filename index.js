const keyStr = require("./keyStr");
const jose = require("node-jose");

const keystore = jose.JWK.createKeyStore();
keystore.add(keyStr).then(key => {
  console.log(key);

  jose.JWE.createEncrypt({ format: "compact" }, key)
    .update("My Encrypted message")
    .final()
    .then(enc => {
      console.log(enc);
    });
});
