const jose = require("node-jose");

const keystore = jose.JWK.createKeyStore();

keystore.generate("RSA", 2048).then(key => {
  console.log(key);

  jose.JWE.createEncrypt(key)
    .update("hello world")
    .final()
    .then(enc => {
      console.log(enc);
    });
});
