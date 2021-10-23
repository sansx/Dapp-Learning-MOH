const { utils } = require("ethers");
const fs = require("fs");
const chalk = require("chalk");
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");

require("hardhat-deploy");

require("@eth-optimism/hardhat-ovm");
require("@nomiclabs/hardhat-ethers");

require("@nomiclabs/hardhat-etherscan");


/*
      📡 This is where you configure your deploy configuration for 🏗 scaffold-eth

      check out `packages/scripts/deploy.js` to customize your deployment

      out of the box it will auto deploy anything in the `contracts` folder and named *.sol
      plus it will use *.args for constructor args
*/

//
// Select the network you want to deploy to here:
//
const defaultNetwork = "matic_mumbai";

function mnemonic() {

  return process.env.PRIVATE_KEY;
 
}

module.exports = {
  defaultNetwork,

  // don't forget to set your provider like:
  // REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
  // (then your frontend will talk to your contracts on the live network!)
  // (you will need to restart the `yarn run start` dev server after editing the .env)

  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + process.env.INFURA_ID, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_ID, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + process.env.INFURA_ID, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFURA_ID, // <---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    xdai: {
      url: "https://rpc.xdaichain.com/",
      gasPrice: 1000000000,
      accounts: [
        mnemonic()
      ],
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com/",
      gasPrice: 1000000000,
      accounts: [
        mnemonic()
      ],
    },
    matic_mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/" + process.env.INFURA_ID,
      gasPrice: 1000000000,
      accounts: [
        mnemonic()
      ],
    },
    rinkebyArbitrum: {
      url: "https://rinkeby.arbitrum.io/rpc",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      companionNetworks: {
        l1: "rinkeby",
      },
    },
    localArbitrum: {
      url: "http://localhost:8547",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      companionNetworks: {
        l1: "localArbitrumL1",
      },
    },
    localArbitrumL1: {
      url: "http://localhost:7545",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      companionNetworks: {
        l2: "localArbitrum",
      },
    },
    kovanOptimism: {
      url: "https://kovan.optimism.io",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      ovm: true,
      companionNetworks: {
        l1: "kovan",
      },
    },
    localOptimism: {
      url: "http://localhost:8545",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      ovm: true,
      companionNetworks: {
        l1: "localOptimismL1",
      },
    },
    localOptimismL1: {
      url: "http://localhost:9545",
      gasPrice: 0,
      accounts: [
        mnemonic()
      ],
      companionNetworks: {
        l2: "localOptimism",
      },
    },
  },
  etherscan: {
    apiKey: "77UU1F1F2X7DXEQ255A6493AN1JTG1SADF",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  ovm: {
    solcVersion: "0.7.6",
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  mocha: {
    timeout: 20000
  }
};

