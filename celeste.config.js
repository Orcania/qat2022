const mintAbi = require('./src/static/abi/mint.json');

module.exports = {
    isMultichain: false,
    rpcs: {
        ETH: {
            // chainId: '1',
            // url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            // explorer: 'https://etherscan.io',
            chainId: '97',
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            explorer: 'https://testnet.bscscan.com',
        },
    },
    smartContracts: [
        {
            key: 'MINT',
            abi: mintAbi,
            address: '0xD50b51898Fc8c8037C3c9CC299070Db376b7b3F3', // bsc
            // address: '0x4751cc885f28feb633aa25cf4c487add8d2eb96b',
        },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',
    },
};
