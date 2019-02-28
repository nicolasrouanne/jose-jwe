const keyStr = require("./keyStr");
const jose = require("node-jose");

const keystore = jose.JWK.createKeyStore();
keystore.add(keyStr).then(key => {
  console.log(key);

  jose.JWE.createEncrypt(key)
    .update("hello world")
    .final()
    .then(enc => {
      console.log(enc);
    });
});
