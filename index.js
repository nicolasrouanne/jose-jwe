const keyStr = require("./keyStr");
const jose = require("node-jose");

const keystore = jose.JWK.createKeyStore();

const encrypt = input =>
  keystore.add(keyStr).then(key =>
    jose.JWE.createEncrypt({ format: "compact" }, key)
      .update(input)
      .final()
  );

encrypt("foo").then(enc => console.log(enc));
