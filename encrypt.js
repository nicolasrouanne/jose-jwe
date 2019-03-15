const keyStr = require("./keyStr");
const jose = require("node-jose");

const encrypt = (input, format = "compact") =>
  jose.JWK.asKey(keyStr).then(key =>
    jose.JWE.createEncrypt({ format }, key)
      .update(input)
      .final()
  );

module.exports = encrypt;
