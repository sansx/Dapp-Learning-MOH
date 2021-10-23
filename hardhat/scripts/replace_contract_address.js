const addresses = require('../contract_address.json');
var replace = require("replace");

replace({
    regex: addresses.original,
    replacement: addresses.target,
    paths: [__dirname + '/../../react-app/src/contracts/hardhat_contracts.json'],
    recursive: true,
    silent: true,
});