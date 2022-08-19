import { BytesLike } from "ethers";
import { ethers } from "hardhat";


async function main() {

//   @ts-ignore
  let wallet = new ethers.Wallet(process.env.ACCOUNT_PRIVATE_KEY);
  const _value = 1;

  const CONTRACTADDRESS = "0xee32586a556f18d251f04665febbc0ee426f1d25";
  const Reentrancy = await ethers.getContractAt("ERC721", CONTRACTADDRESS);
// @ts-ignore
await Reentrancy.safeMint("0x87a6e0A7b9bA44a1933bD85c1d431E0BD2dd4B5a", "https://gateway.pinata.cloud/ipfs/QmToudByyBRdNTTkzYULbNN7zeDtNNHRWWPDdMxNL5yiqn", 0);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

