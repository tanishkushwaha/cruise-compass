const { generate } = require("generate-password");

var password = generate({
  length: 8,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
