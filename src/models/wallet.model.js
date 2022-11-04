/**
 * @type {import(./wallet-modal.d.ts).WalletModel}
 */

class WalletModel {
    constructor(address = null) {
        this.address = address;
        this.balance = '0';
        this.ocaBalance = '0';
    }
}

export default WalletModel;
