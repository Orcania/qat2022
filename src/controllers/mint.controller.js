import NftMintProxy from 'src/sc-proxies/mint';

import NftModel from 'src/models/nft.model';

class MintController {
    #scProxy;

    constructor() {
        this.#scProxy = new NftMintProxy();
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
