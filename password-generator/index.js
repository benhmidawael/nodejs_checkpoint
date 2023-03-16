var generatePassword = require('generate-password');

function generatePassword() {
  var password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
  });

  console.log(password);
}

generatePassword();
