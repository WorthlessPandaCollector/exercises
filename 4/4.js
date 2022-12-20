const etheres = require("ethers");
const prompt = require("prompt-promise");

// monitor ethereum activity in real time

// sign up for free Infura account

//using 'ethers'npm library, display the following:
// current block number
// current gas price
// current chain id

const ethers = require('ethers');

async function getBlockNumber() {
  // Create a provider to connect to the Ethereum network
  const provider = new ethers.providers.InfuraProvider();

  // Get the current block number
  const blockNumber = await provider.getBlockNumber();

  console.log(`Current block number: ${blockNumber}`);
}

async function getGasPrice() {
    const provider = new ethers.providers.InfuraProvider();

    const gasPrice = await provider.getGasPrice();
    

    console.log(`Current gas price is: ${gasPrice}`);
}

async function getChainID() {
    const provider = new ethers.providers.InfuraProvider();
    const chainID = await provider.getNetwork();
    console.log(`Current chain ID (network) is`, chainID);
}

async function balance() {
    const provider = new ethers.providers.InfuraProvider();
    const userAddress = await prompt("Enter your address\n");
    const balance = await provider.getBalance(userAddress);
    const convert = ethers.utils.formatEther(balance);
    console.log(`This account has ${convert} ETH`);
    process.exit();
}


getBlockNumber();
getGasPrice();
getChainID();
balance();






// using prompt-promise
// prompt user to provide ethereum address

// display balance of that account to the user in terminal

// if not valid address, display error

// balance should be converted from wei to eth

// display transaction count of that account to the user in the terminal

