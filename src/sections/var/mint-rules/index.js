/* eslint-disable @next/next/no-img-element */
const data = [
    {
        id: 1,
        c: () => (
            <p className="has-text-burdundy">
                World Fantasy Cup&nmsp;s mint will stay <b>open</b> till the final whistle of the Official FIFAWorld Cup
                Qatar 2022.
            </p>
        ),
        img: '/media/project/1.png',
    },
    {
        id: 2,
        c: () => (
            <p className="has-text-burdundy">
                World Fantasy Cup&nbsp;s supply is capped to <b>100,000</b> NFT Teams.
            </p>
        ),
        img: '/media/project/2.png',
    },
    {
        id: 3,
        c: () => (
            <p className="has-text-burdundy">
                The Public Mint Price is 0.05 ETH per NFT before the start of the official World Cup,and 0.1 ETH after
                the start of the official World Cup.
            </p>
        ),
        img: '/media/project/3.png',
    },
];

const MintRulesSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '8rem' }}>
            <h1 className="title is-1  has-font-akira has-text-ww  mb-6 has-text-centered-mobile">Mint rules</h1>
            <div className="">
                <div className="columns" style={{ maxWidth: '80%', margin: 'auto' }}>
                    {data.map(item => (
                        <div className="column is-4" key={item.id}>
                            <div className="box" style={{ height: '100%' }}>
                                <figure className="image is-square" style={{ transform: 'scale(0.5)' }}>
                                    <img src={item.img} alt="" />
                                </figure>
                                {item.c()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MintRulesSection;
