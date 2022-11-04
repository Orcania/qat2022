/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */

import { store as celesteStore } from '@celeste-js/store';

import WalletModel from 'src/models/wallet.model';
import OcaMintProxy from 'src/sc-proxies/mint';

class WalletController {
    #scProxy;
    #cStore;

    constructor() {
        this.#scProxy = new OcaMintProxy();
        this.#cStore = celesteStore;
    }

    create(walletAddress) {
        return new WalletModel(walletAddress);
    }

    async loadWalletData(wModel) {
        const wallet = new WalletModel(wModel.address);

        const { web3 } = this.#cStore.getState().web3Reducer;

        const balance = await web3.eth.getBalance(wallet.address);

        wallet.balance = balance;

        return wallet;
    }
}

export default WalletController;
