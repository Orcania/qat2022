const PointsSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle2 has-text-centered has-font-qatar mb-6">How it works</h1>
            <p className="has-text-cream has-font-qatar is-size-5 has-text-justified">
                In case 2 or more teams end up having the same total number of points, we will differentiate between
                <br />
                them with the following rules:
                <br />
                <br />
                <div className="has-text-centered">
                    <ol>
                        <li className="pb-3">Visit: www.worldfantasycup.com</li>
                        <li className="pb-3">Connect your crypto wallet</li>
                        <li className="pb-3">Click on Get a Team on the home page</li>
                        <li className="pb-3">Approve the transaction </li>
                        <li className="pb-3">Receive your NFT team in your wallet</li>
                        <li className="pb-3">Sit back, watch the WC, and monitor your team’s ranking</li>
                        <li className="pb-3">Hopefully, collect your prizes!</li>
                        <li className="pb-3">Share your team with the other fans on Discord and Twitter!</li>
                    </ol>
                </div>
            </p>
        </section>
    );
};

export default PointsSection;
