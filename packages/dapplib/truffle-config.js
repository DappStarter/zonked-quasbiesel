require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift reward stereo common give enroll fresh skate'; 
let testAccounts = [
"0x02ad672bc4f599ea88d97cd33147f17cea6f66324f65e5fc5f36a7b0130cec28",
"0xca0facd06ee1e3594b42fde7520fb6016a594ca8b4146e521ceb5ba769845ead",
"0x8061e613bae271c84eabd3d9940b5c4f5568e9e321ce5e7fcecac06d4de3cacc",
"0x3b16b9dd933fe76fe550d05e2e4cd5f57b8022dbd28ff1809db771e42262500b",
"0x8d42ae79c43fd85717837246a379974fb40b3446142e332ea750613bf73d0c60",
"0xc0b5467d4be1ce1f78a186cd25d47da36a429bdcf4c8f125d0b2f9b1a044c09d",
"0xdff6a10b21a8657d70364ff5a9e9566a615c6dd8efcd82982b6236a2bf80207f",
"0xb77c670f9c424429a30d9d7271c66fcd55ded7441f0d8b5e868046d2a90444d6",
"0xe1b6dc11c174df3d9a87a6274bfe58684a0f46433d0a6cb38b53cb2ac6dfd685",
"0xa94c8fe1c760f2ce9b309064e189c0bfed0e9a2371b84b16d7f5e2eb60a5b3c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

