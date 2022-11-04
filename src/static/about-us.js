const teamData = [
    {
        id: 1,
        name: 'TheBlessedSon',
        img: '/media/team/1.png',
        logo: () => (
            <a
                href="https://twitter.com/theblesseds0n?s"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white is-size-3"
            >
                <span className="icon">
                    <i className="fab fa-twitter" />
                </span>
            </a>
        ),
        description: () => (
            <div className="has-text-white is-size-7">
                Youssouf Drissi, aka TheBlessedSon, is a web3 entrepreneur. He is the founder of Sporting Labs, TRAF
                Entertainment, and The Red Ape Family NFT TV Show. He is also the Managing Director of AstroVerse, and a
                web3 advisor of Flooz World, and the fashion brand Diesel.
                <br />
                <br />
                He started his NFT journey in November 2019 by onboarding artists into the NFT space and was one of the
                early investors in the Bored Ape YC project, among other NFT Projects.
            </div>
        ),
    },
    {
        id: 2,
        name: 'Tim Mangnall',
        img: '/media/team/2.jpeg',
        logo: () => (
            <a
                href="https://www.linkedin.com/in/timmangnall"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white is-size-3"
            >
                <span className="icon">
                    <i className="fab fa-linkedin" />
                </span>
            </a>
        ),
        description: () => (
            <div className="has-text-white is-size-7">
                Tim Mangnall is CEO and Founder of Capital Block, Europe’s leading web3 consultancy dedicated to sports
                and entertainment.
                <br />
                <br />
                Tim began personally investing in cryptocurrency around 7 years ago, and has successfully built Capital
                Block over the past 2 years into the most trusted consultancy in Europe for sports teams looking to
                enter the web3 space. Capital Block represents Tim’s two major passions: sports and crypto. <br />
                <br />
                <br />
                Tim and his team at Capital Block help sports clubs, brands, production houses, artists, celebrities and
                entertainers navigate the web3 space, taking in NFTs, the Metaverse, crypto, and more
            </div>
        ),
    },
    {
        id: 3,
        name: 'Sporting Labs',
        img: '/media/team/3.jpg',
        logo: () => (
            <a
                href="http://www.sportinglabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white is-size-3"
            >
                <span className="icon">
                    <i className="fa-regular fa-globe" />
                </span>
            </a>
        ),
        description: () => (
            <div className="has-text-white is-size-7">
                Sporting Labs is a web3 Sports Fantasy brand dedicated to create play-2-win experiences powered by the
                blockchain.
                <br />
                <br />
                Sporting Labs focuses on all sorts of sports and tournaments, and they intend to offer play-2-win
                experiences in Football, Basketball, MMA, American Football, Formula1, Tennis, Olympics, and more.
            </div>
        ),
    },
    {
        id: 4,
        name: 'Block Capital',
        img: '/media/team/4.png',
        logo: () => (
            <a
                href="https://capitalblock.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white is-size-3"
            >
                <span className="icon">
                    <i className="fa-regular fa-globe" />
                </span>
            </a>
        ),
        description: () => (
            <div className="has-text-white is-size-7">
                Capital Block is an evolution of Capital Sports Media, which owns and manages Sports inventory and
                general media activity across football clubs in Europe, Middle East, North Africa and Turkey.
                <br />
                <br />
                Capital Block builds brands for an exciting future that is centered around crafting powerful web3
                stories and seamless experiences for a highly sought-after digital centric audience.
            </div>
        ),
    },
    {
        id: 5,
        name: 'Orcania',
        img: '/media/team/5.jpg',
        logo: () => (
            <a
                href="https://www.orcania.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-white is-size-3"
            >
                <span className="icon">
                    <i className="fa-regular fa-globe" />
                </span>
            </a>
        ),
        description: () => (
            <div className="has-text-white is-size-7">
                Orcania is a technologically driven blockchain development company.
                <br />
                <br />
                Orcania developed a series of advanced projects such as the Orcania DEX, the Orcania Multichain, and
                Chain projects
            </div>
        ),
    },
];

export default teamData;
