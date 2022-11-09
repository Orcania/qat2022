/* eslint-disable lines-between-class-members */
import NftMintProxy from 'src/sc-proxies/mint';
import InfluencerMint from 'src/sc-proxies/influencer-mint';

import NftModel from 'src/models/nft.model';

class MintController {
    #scProxy;
    #influencerScProxy;

    constructor() {
        this.#scProxy = new NftMintProxy();
        this.#influencerScProxy = new InfluencerMint();
    }

    influencerBuy({ referralId }, { from, value }) {
        const write = this.#influencerScProxy.write();

        return write.publicMint({ referralId }, { from, value });
    }

    buy({ from, value }) {
        const write = this.#scProxy.write();

        return write.publicMint({ from, value });
    }

    async getNftData() {
        const read = this.#scProxy.read();

        const price = await read.price();
        const totalSupply = await read.totalSupply();

        const nft = new NftModel();
        nft.price = price;
        nft.totalSupply = totalSupply;

        return nft;
    }
}

export default MintController;
