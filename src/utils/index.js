import BigNumber from 'bignumber.js';

export const normalNum2BigNum = (num, decimals = 18) => {
    return BigNumber(num)
        .times(10 ** decimals)
        .toFixed(0)
        .toString();
};

export const BigNum2NormalNum = (num, decimals = 18, decimalPlaces = 18) => {
    return BigNumber(num)
        .div(10 ** decimals)
        .toFixed(decimalPlaces)
        .toString();
};

export const formatNumber = value => {
    return Number(value).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 18,
    });
};

export const reduceHash = (hash, amount = 4) => `${hash.slice(0, amount + 2)}...${hash.slice(-amount)}`;

export const StringToHex = str => {
    return Buffer.from(str).toString('hex');
};

export const HexToBn = hex => {
    return new BigNumber(hex, 16).toString();
};
