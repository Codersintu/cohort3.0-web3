// how to convert UInt8Array to ascii
// function bytesToAscii(byteArray) {
//   return new TextDecoder().decode(byteArray);
// }
// // Example usage:
// const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"
// -------------------------------------------------
// how to convert ascii to UInt8Array****
// function asciiToBytes(asciiString) {
//   return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
// }
// // Example usage:
// const ascii = "sintu";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray);


// ------------------------------------------
// Hex
// Array to hex
// function arrayToHex(byteArray) {
//   let hexString = '';
//   for (let i = 0; i < byteArray.length; i++) {
//     hexString += byteArray[i].toString(16).padStart(2, '0');
//   }
//   return hexString;
// }
// Example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
// const hexString = arrayToHex(byteArray);
// console.log(hexString);


// ----------------------------
// hex to Array
// function hexToArray(hexString) {
//   const byteArray = new Uint8Array(hexString.length / 2);
//   for (let i = 0; i < byteArray.length; i++) {
//     byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
//   }
//   return byteArray;
// }
// Example usage:
// const hex = "48656c6c6f";
// const byteArrayFromHex = hexToArray(hex);
// console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]


// -------------------------
// array to convert Base64
// const Uint8Array=new Uint8Array([72,101,108,108,111]);
// const base64Encoded=Buffer.from(Uint8Array).toString("base64")
// console.log(base64Encoded);


// ------------------------------------------
// Base58
// uint8Array To Base58
// import bs58 from "bs58"
// function uint8ArrayToBase58(Uint8Array) {
//   return bs58.encode(Uint8Array)
// }
// // example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const base58String = uint8ArrayToBase58(byteArray);
// console.log(base58String); // Output: Base58 encoded string
// // -----------------
// // Base58 to uint8Array
// function base58ToUint8Array(params) {
//   return bs58.decode(params)
// }
// const base58=base58String;
// const byteArrayFrombase58=base58ToUint8Array(base58)
// console.log(byteArrayFrombase58)

// ------------------------------------
// Asymetric encryption 
// import crypto from "crypto"

// Generate a random encryption key
// const key = crypto.randomBytes(32); // 32 bytes = 256 bits
// const iv = crypto.randomBytes(16); // Initialization vector (IV)

// Function to encrypt text
// function encrypt(text) {
//     const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//     let encrypted = cipher.update(text, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return encrypted;
// }

// Function to decrypt text
// function decrypt(encryptedText) {
//     const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//     let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// // Example usage
// const textToEncrypt = 'Hello, World!';
// const encryptedText = encrypt(textToEncrypt);
// const decryptedText = decrypt(encryptedText);

// console.log('Original Text:', textToEncrypt);
// console.log('Encrypted Text:', encryptedText);
// console.log('Decrypted Text:', decryptedText);

