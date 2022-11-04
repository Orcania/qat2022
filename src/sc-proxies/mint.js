// import celesteOptions from 'src/components/celeste/celesteOptions';

import { store as celesteStore } from '@celeste-js/store';
// import ocaReferralMintABI from 'src/static/abis/oca_mint_referral.json';

import { rpcs } from 'celeste.config';

// function txSaver(address, tx, metadata) {
//     const serializedTx = {
//         hash: tx.transactionHash,
//         ...metadata,
//     };

//     const txs = JSON.parse(localStorage.getItem(address)) || [];
//     txs.push(serializedTx);
//     localStorage.setItem(address, JSON.stringify(txs));
// }

const NftMintProxy = () => {
    return {
        read: () => {
            const { web3Reducer } = celesteStore.getState();
            const MINT_READ = web3Reducer.contracts[`MINT_READ.${rpcs.ETH.chainId}`];

            return {
                price: async () => {
                    const price = await MINT_READ.methods.getPrice().call();
                    return price;
                },
                totalSupply: async () => {
                    const totalSupply = await MINT_READ.methods.totalSupply().call();
                    return totalSupply;
                },
            };
        },

        write: () => {
            const { web3Reducer } = celesteStore.getState();

            const { MINT } = web3Reducer.contracts;

            // const { web3 } = web3Reducer;

            // const OCAMINT = new web3.eth.Contract(ocamintABI, addressBook[`OCAMINT_${chainId}`]);

            // const OCA_REFERRAL_MINT = new web3.eth.Contract(ocaReferralMintABI, addressBook.OCA_REFERRAL_MINT[chainId]);

            return {
                async publicMint({ from, value, gasPrice = null, maxPriorityFeePerGas = null }) {
                    const data = {
                        from,
                        value,
                    };

                    if (gasPrice) data.gasPrice = gasPrice;
                    if (maxPriorityFeePerGas) data.maxPriorityFeePerGas = maxPriorityFeePerGas;

                    const tx = MINT.methods.publicMint();

                    return new Promise((resolve, reject) => {
                        try {
                            const txRes = tx.send(data);
                            resolve(txRes);
                        } catch (error) {
                            reject(error);
                        }
                    });
                },
            };
        },
    };
};

export default NftMintProxy;
