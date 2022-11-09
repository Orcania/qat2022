// import celesteOptions from 'src/components/celeste/celesteOptions';

import { store as celesteStore } from '@celeste-js/store';
// import ocaReferralMintABI from 'src/static/abis/oca_mint_referral.json';

const InfluencerMint = () => {
    return {
        // read: () => {
        //     const { web3Reducer } = celesteStore.getState();
        //     const MINT_READ = web3Reducer.contracts[`MINT_READ.${rpcs.ETH.chainId}`];

        //     return {
        //         price: async () => {
        //             const price = await MINT_READ.methods.getPrice().call();
        //             return price;
        //         },
        //         totalSupply: async () => {
        //             const totalSupply = await MINT_READ.methods.totalSupply().call();
        //             return totalSupply;
        //         },
        //     };
        // },

        write: () => {
            const { web3Reducer } = celesteStore.getState();

            const { INFLUENCER_MINT } = web3Reducer.contracts;

            // const { web3 } = web3Reducer;

            // const OCAMINT = new web3.eth.Contract(ocamintABI, addressBook[`OCAMINT_${chainId}`]);

            // const OCA_REFERRAL_MINT = new web3.eth.Contract(ocaReferralMintABI, addressBook.OCA_REFERRAL_MINT[chainId]);

            return {
                async publicMint({ referralId }, { from, value, gasPrice = null, maxPriorityFeePerGas = null }) {
                    const data = {
                        from,
                        value,
                    };

                    if (gasPrice) data.gasPrice = gasPrice;
                    if (maxPriorityFeePerGas) data.maxPriorityFeePerGas = maxPriorityFeePerGas;

                    const tx = INFLUENCER_MINT.methods.publicMint(referralId);

                    return new Promise((resolve, reject) => {
                        try {
                            const txRes = tx.send(data);
                            resolve(txRes);
                        } catch (error) {
                            reject(error);
                        }
                    });
                },

                // async publicMintTo({ to, referralId }, { from, value, gasPrice = null, maxPriorityFeePerGas = null }) {
                //     const data = {
                //         from,
                //         value,
                //     };

                //     if (gasPrice) data.gasPrice = gasPrice;
                //     if (maxPriorityFeePerGas) data.maxPriorityFeePerGas = maxPriorityFeePerGas;

                //     const tx = INFLUENCER_MINT.methods.publicMintTo(to, referralId);

                //     return new Promise((resolve, reject) => {
                //         try {
                //             const txRes = tx.send(data);
                //             resolve(txRes);
                //         } catch (error) {
                //             reject(error);
                //         }
                //     });
                // },
            };
        },
    };
};

export default InfluencerMint;
