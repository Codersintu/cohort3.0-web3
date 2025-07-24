import * as ed from "@noble/ed25519"
import { Keypair } from "@solana/web3.js";

// async function main(params) {
//     const privKey=ed.utils.randomPrivateKey();
//     console.log(privKey)
//     const message=new TextEncoder().encode("i sent $500 to harkirat")
//     console.log(message)
//     const publickey=await ed.getPublicKeyAsync(privKey)
//     // console.log(publickey)
//     const signature=await ed.signAsync(message,privKey)
//     console.log(signature)
//     const isValid=await ed.verifyAsync(signature,message,publickey)
//     console.log(isValid)
// }
// main()


import bs58 from "bs58"
    const keypair=Keypair.generate();
    console.log(keypair)
    const publickey=keypair.publicKey.toString()
    const privKey=keypair.secretKey
    const final=bs58.encode(privKey)
    console.log(final)
    console.log("1",publickey)
    // console.log("2",privKey)
    const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message, secretKey);
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);