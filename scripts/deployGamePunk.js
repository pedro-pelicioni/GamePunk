const hre = require("hardhat");

async function main() {

  const GamePunk = await hre.ethers.getContractFactory("GamePunk");
  const gamePunk = await GamePunk.deploy();

  await gamePunk.deployed();

  console.log("GamePunk deployed to:", gamePunk.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
