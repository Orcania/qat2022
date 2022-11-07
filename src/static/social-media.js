/* eslint-disable @next/next/no-img-element */
const data = [
    {
        id: 1,
        name: 'Twitter',
        url: 'https://twitter.com/WorldFantasyCup',
        icon: () => <i className="fab fa-twitter" />,
    },
    {
        id: 2,
        name: 'Discord',
        url: 'https://discord.com/invite/zK5Zr7ExFu',
        icon: () => <i className="fab fa-discord" />,
    },
    {
        id: 3,
        name: 'OpenSea',
        url: 'https://opensea.io/collection/worldfantasycup',
        icon: () => <i className="fa-solid fa-sailboat" />,
    },
    {
        id: 4,
        name: 'Etherscan',
        url: 'https://etherscan.io/address/0x4751cc885f28feb633aa25cf4c487add8d2eb96b',
        icon: (theme = 'w') => {
            return theme === 'w' ? (
                <img src="/media/logos/etherscan.png" alt="" />
            ) : (
                <img src="/media/logos/etherscan-b.png" alt="" />
            );
        },
    },
];

export default data;
