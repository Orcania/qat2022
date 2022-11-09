const mintAbi = require('./src/static/abi/mint.json');
const influencerAbi = require('./src/static/abi/influencer.json');

module.exports = {
    isMultichain: false,
    rpcs: {
        ETH: {
            chainId: '1',
            url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            explorer: 'https://etherscan.io',
            // chainId: '97',
            // url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            // explorer: 'https://testnet.bscscan.com',
        },
    },
    smartContracts: [
        {
            key: 'MINT',
            abi: mintAbi,
            // address: '0xD50b51898Fc8c8037C3c9CC299070Db376b7b3F3', // bsc
            address: '0x4751Cc885f28FEb633aa25Cf4c487ADD8d2eb96B', // eth
        },
        {
            key: 'INFLUENCER_MINT',
            abi: influencerAbi,
            address: '0x62c5f000224AE365E9c1A14c01eFdcb67e3f0Ed5', // eth
        },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',
    },
};
