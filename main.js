const allPasswords = [];

function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number = "0123456789",
    specialChar = "#$!-_",
    allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$!-_";
  (password = ""), (passwordLength = Math.floor(Math.random() * (12 - 8 + 1) + 8));

  password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  password += number.charAt(Math.floor(Math.random() * number.length));
  password += specialChar.charAt(Math.floor(Math.random() * specialChar.length));

  remaingCharsLengh = passwordLength - 4;

  for (i = 0; i < remaingCharsLengh; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  if (allPasswords.includes(password)) {
    try {
      generatePassword();
      return password;
    } catch (err) {
      throw new Error("Sorry no other available password");
    }
  } else {
    allPasswords.push(password);
    return password;
  }
}

function showPasswords(numOfPasswords) {
  let passContainer = document.getElementById("passContainer");
  passContainer.innerHTML = "";
  for (var i = 0; i < numOfPasswords; i++) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(`Password ${i + 1}: ` + generatePassword());
    node.appendChild(textnode);
    passContainer.appendChild(node);
  }
}
