import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");
const hre = require("hardhat");

async function main() {
 

const GDigitzToken = await ethers.getContractFactory("GDigitz");
const gdigitz = await GDigitzToken.deploy();
await gdigitz.deployed();
console.log(`GDigitzToken Token has been depliyed tp ${gdigitz.address}`);

const Airdrop = await ethers.getContractFactory("Airdrop");
const airdrop = await Airdrop.deploy(gdigitz.address, merkleroot);
await airdrop.deployed();
console.log(`Airdrop contract has een deployed to ${airdrop.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
