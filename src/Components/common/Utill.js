var CryptoJS = require("crypto-js");
const CIPHER_KEY = "clg@123";

export function EncryptId(data) {
    try {
        return encodeURIComponent(CryptoJS.DES.encrypt(data.toString(), CIPHER_KEY).toString());
    }
    catch(err) {
        
    }
}

export function DecryptId(encryptedData) {
    try {
        const bytes = CryptoJS.DES.decrypt(decodeURIComponent(encryptedData), CIPHER_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    catch(err) {
      
    }
}



