const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }

  isLetter(letter) {
    const l = letter.charCodeAt();

    if(l > 64 && l < 91) {
      return true;
    } else {
      return false;
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encrypted = '';
    const upperCaseMessage = message.toUpperCase();
    
    for (let i = 0, j = 0; i < message.length; i++) {    
      const currentLetter = upperCaseMessage[i];
      const first = 65;

      if(this.isLetter(currentLetter)) {
        let Mi = (currentLetter.charCodeAt() - first);
        let Ki = (key[j % key.length].toUpperCase().charCodeAt() - first);
        let upperLetter = (Mi + Ki) % 26;

        encrypted += String.fromCharCode(upperLetter + first);
        j++;
      } 
      else {
        encrypted += upperCaseMessage[i];
      }
    }

    if (this.type || this.type === undefined) {
      return encrypted;
    } else if (this.type === false) {
      return encrypted.split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decrypted = '';
    const upperCaseMessage = message.toUpperCase();

    for (let i = 0, j = 0; i < upperCaseMessage.length; i++) {    
      const currentLetter = upperCaseMessage[i];
      const first = 65;
      const last = 91;

      if(this.isLetter(currentLetter)) {
        let Mi = (currentLetter.charCodeAt() - first);
        let Ki = (key[j % key.length].toUpperCase().charCodeAt() - first);
        let upperLetter = (Mi - Ki) % 26;
            
        if (upperLetter >= 0) {
          decrypted += String.fromCharCode(upperLetter + first);
        } else if (upperLetter < 0) {
          decrypted += String.fromCharCode(upperLetter + last);
        }

        j++;
      } 
      else {
        decrypted += currentLetter;
      }
    }

    if (this.type || this.type === undefined) {
      return decrypted;
    } else if (this.type === false) {
      return decrypted.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
