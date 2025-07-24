// const key='sintu';
// const bytes=new TextEncoder().encode(key)
// console.log(bytes)

// import * as ed from '@noble/ed25519';
// const ed=require("@noble/ed25519")
// async function main () {
//   // Uint8Arrays or hex strings are accepted:
//   // Uint8Array.from([0xde, 0xad, 0xbe, 0xef]) is equal to 'deadbeef'
//   const privKey = ed.utils.randomPrivateKey();
//   console.log(privKey)
//   const message = new TextEncoder().encode("hey harkirat i sending 1million in bitcoin say thank to me");
//   console.log(message)
//   const pubKey = await ed.getPublicKeyAsync(privKey); // Sync methods below
//   console.log(pubKey)
//   const signature = await ed.signAsync(message, privKey);
//   console.log(signature)
//   const isValid = await ed.verifyAsync(signature, message, pubKey);
// };
// main()


import  {generateMnemonic} from  'bip39';

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);