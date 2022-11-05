const PointsSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle3 has-text-centered has-font-akira mb-6">
                Step by <br />
                Step
            </h1>
            <p className="has-text-white has-font-qatar is-size-5 has-text-justified">
                <div className="has-text-centered has-font-montserrat">
                    <ol style={{ listStylePosition: 'inside' }}>
                        <li className="pb-0 has-text-centered">Visit: www.worldfantasycup.com</li>
                        <li className="pb-0 has-text-centered">Connect your crypto wallet</li>
                        <li className="pb-0 has-text-centered">Click on Get a Team on the home page</li>
                        <li className="pb-0 has-text-centered">Approve the transaction </li>
                        <li className="pb-0 has-text-centered">Receive your NFT team in your wallet</li>
                        <li className="pb-0 has-text-centered">
                            Sit back, watch the WC, and monitor your team’s ranking
                        </li>
                        <li className="pb-0 has-text-centered">Hopefully, collect your prizes!</li>
                        <li className="pb-0 has-text-centered">
                            Share your team with the other fans on Discord and Twitter!
                        </li>
                    </ol>
                    <br />
                </div>
            </p>
        </section>
    );
};

export default PointsSection;
