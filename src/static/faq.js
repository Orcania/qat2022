const data = [
    {
        id: 1,
        question: 'Who we are',
        ansComponent: () => (
            <p className="has-text-cream has-font-qatar is-size-5 has-text-centered">
                World Fantasy Cup is a Sporting Labs project.
                <br />
                <br />
                Sporting Labs is a web3 Sports Fantasy brand dedicated to create play-2-win
                <br />
                experiences powered by the Ethereum blockchain.
            </p>
        ),
    },
    {
        id: 2,
        question: 'After the WC',
        ansComponent: () => (
            <p className="has-text-cream has-font-qatar is-size-5 has-text-centered">
                Once the World Cup is finished, prizes will be distributed, and the top 50% of the NFT
                <br />
                Teams in the WFC ranking will have their NFTs changed into a Mint Pass that will
                <br />
                qualify them to mint the next Fantasy tournament that Sporting Labs will organize.
            </p>
        ),
    },
    {
        id: 3,
        question: 'Roadmap',
        ansComponent: () => (
            <p className="has-text-cream has-font-qatar is-size-5 has-text-centered">
                World Fantasy Cup is a launch pad project designed by Sporting Labs to execute further on its mission to
                become the leading web3 Sports Fantasy brand dedicated to create play-2-win experiences powered by the
                blockchain.
                <br />
                <br />
                After the World Fantasy Cup project, we intend to launch other Sports Fantasy play-2- win Fantasy
                Tournaments.
                <br />
                <br />
                Football, Basketball, MMA, American Football, Formula 1, Tennis, Olympics, etc. We intent to be present
                in all sorts of sports and tournaments.
                <br />
                <br />A detailed roadmap and timeline containing the upcoming leagues and tournaments will be shared on
                our website, so all sports fans can know when they can participate in their favorite sport and
                tournament.
            </p>
        ),
    },
];

export default data;
