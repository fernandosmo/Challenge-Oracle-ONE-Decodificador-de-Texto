const msgInsert = document.querySelector('.insert-msg');
const msgResult = document.querySelector('.result-msg');
const buttonCrypt = document.querySelector('.button-crypt');
const buttonDecrypt = document.querySelector('.button-decrypt');
const buttonCopy = document.querySelector('.button-copy');
const alertRules = document.querySelector('ul');
const bgResult = document.querySelector('.img-container-result-msg');
const textResult = document.querySelector('.msg-text-result');

const insertVowels = ['e', 'i', 'a', 'o', 'u'];
const outputVowels = ['enter', 'imes', 'ai', 'ober', 'ufat'];

msgInsert.addEventListener('keypress', function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    alertRules.style.display = 'inline';
    setTimeout(alertFunc, 2000);
  }
});

function alertFunc() {
  alertRules.style.display = 'none';
}

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-z]';

  if (char.match(pattern)) {
    return true;
  }
}

function crypt(msg) {
  for (let i = 0; i < insertVowels.length; i++) {
    msg = msg.replaceAll(insertVowels[i], outputVowels[i]);
  }
  return msg;
}

function decrypt(msg) {
  for (let i = 0; i < insertVowels.length; i++) {
    msg = msg.replaceAll(outputVowels[i], insertVowels[i]);
  }
  return msg;
}

function copy() {
  msgInsert.value = msgResult.value;
}

function filledResult() {
  bgResult.style.display = 'none';
  textResult.style.display = 'flex';
  buttonCopy.style.display = 'inline';
  msgInsert.value = '';
}

buttonCrypt.addEventListener('click', function () {
  if (msgInsert.value != '') {
    const encryptedText = crypt(msgInsert.value);
    msgResult.textContent = encryptedText;
    filledResult();
  }
});

buttonDecrypt.addEventListener('click', function () {
  if (msgInsert.value != '') {
    const decryptedText = decrypt(msgInsert.value);
    msgResult.textContent = decryptedText;
    filledResult();
  }
});

buttonCopy.addEventListener('click', function () {
  if (msgResult.value != '') {
    copy();
    bgResult.style.display = 'flex';
    textResult.style.display = 'none';
    buttonCopy.style.display = 'none';
  }
});
