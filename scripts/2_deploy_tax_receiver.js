const { tokenAddress, treasuryAddress, devAddress } = require('../.secrets.json');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("AutoCTaxReceiver");
  const token = await Token.deploy(
    tokenAddress,
    treasuryAddress,
    devAddress
  );
  console.log("Token address:", token.address);
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });