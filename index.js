const encrypt = require("./encrypt");
const encryptHashValues = require("./encryptHashValues");

const payload = { foo: "bar", baz: "qux" };

console.log("Encrypt payload\n-------------------\n");
encrypt("My Encrypted message").then(enc => console.log(`Compact:\n${enc}\n`));
encrypt("My Encrypted message", "flattened").then(enc => {
  console.log("JSON:");
  console.log(enc);
  console.log("\n");
});

encryptHashValues(payload).then(encryptedHash => {
  console.log("Encrypt Hash Values\n-------------------\n");
  console.log(encryptedHash);
});
