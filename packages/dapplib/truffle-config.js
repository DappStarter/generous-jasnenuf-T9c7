require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember equip inflict industry fortune twin'; 
let testAccounts = [
"0x3c0e89807501cf7b28bd40fef5a86b7cf6996fba340b04cee60fc96fdabc41bc",
"0x6b5d0207c6c82b0d4e71df3c23df391ff174d233f77bf3d001dd4e7c6233d510",
"0x839fa19903841026e44b4c031ba75f15dab21068ea691e56eaf5c0d915062fa1",
"0xe83ba32c5f07623f66896b064f9fe94a3f1c9b3ceaab5727f382b8fd828d8bc5",
"0x79b76f4b6d480974684c992c278cd452a2e4c53f1ffe68f7ccd9d146b9d66675",
"0x4a8c931cbab1777171c6cc54de44d7e79f2ab6904e14094dda6f6b052fbbb2b9",
"0x0affc5646fd0dfe1f72b16a0d6de4e4867f4e43e23ca7aff124ee42c72e45a39",
"0xa6cec6c45845a03bde6c5733874acf507dff00b108ca6747d7dbfebcb61b7ed8",
"0xe89b4f2569ee85fb5aabc213907a78f229579f42d8a423630db53bee5cf229bb",
"0xe4d270e408ee4766e7730d148291c6a726b2e38efbc5d866ecf2fccca2073b7c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

