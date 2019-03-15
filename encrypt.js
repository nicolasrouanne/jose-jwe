const keyStr = require("./keyStr");
const jose = require("node-jose");

const encrypt = (input, format = "compact") =>
  jose.JWK.asKey(keyStr).then(key =>
    key.thumbprint().then(thumbprint =>
      jose.JWE.createEncrypt(
        {
          fields: {
            alg: "RSA-OAEP",
            enc: "A256GCM",
            kid: thumbprint
          },
          format
        },
        key
      )
        .update(input)
        .final()
    )
  );

module.exports = encrypt;
