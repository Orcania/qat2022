const mintAbi = require('./src/static/abi/mint.json');

module.exports = {
    isMultichain: false,
    rpcs: {
        ETH: {
            chainId: '1',
            url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            explorer: 'https://etherscan.io',
        },
    },
    smartContracts: [
        {
            key: 'MINT',
            abi: mintAbi,
            address: '0x5B82d07C41b0d8c812BF1CD6A7232dFEF67203d2',
        },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',
        MINT: '0x5B82d07C41b0d8c812BF1CD6A7232dFEF67203d2',
    },
};
