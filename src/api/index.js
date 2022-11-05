import axios from 'axios';

// const endpoint = process.env.ENDPOINT1;
// const endpoint1 = process.env.ENDPOINT;

const root = process.env.ENDPOINT;

const api = {
    get: {
        mintedNfts: address =>
            axios({
                method: 'GET',
                url: `${root}/newlyMintedNftsOf?address=${address}`,
            }),
    },
    post: {},
    put: {},
    delete: {},
};

export default api;
