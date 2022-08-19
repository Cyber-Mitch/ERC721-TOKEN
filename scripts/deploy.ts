import { ethers } from "hardhat";

async function main() {


  const Reentrancy = await ethers.getContractFactory("OlahFemi1");
  const reentrancy = await Reentrancy.deploy();

  await reentrancy.deployed();

  console.log(`Reentrancy is deployed to ${reentrancy.address}`);
}
//Rinkeby contract Address = 0xee32586a556f18d251f04665febbc0ee426f1d25


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});