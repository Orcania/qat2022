const PointsSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="subtitle has-text-ww has-font-akira has-text-centered is-3">Step by Step</h1>
            <br />
            <div className="has-text-white has-font-qatar is-size-5 has-text-justified">
                <div className="columns">
                    <div className="column ">
                        <ol style={{ listStylePosition: 'inside' }}>
                            <li className="pb-0">Visit www.worldfantasycup.com</li>
                            <li className="pb-0">Click on Get a Team button</li>
                            <li className="pb-0">Select your prefered payment method</li>
                            <li className="pb-0">Approve the transaction </li>
                        </ol>
                    </div>
                    <div className="column ">
                        <ol style={{ listStylePosition: 'inside', start: 6 }}>
                            <li className="pb-0">Visit www.worldfantasycup.com</li>
                            <li className="pb-0">Click on Get a Team button</li>
                            <li className="pb-0">Select your prefered payment method</li>
                            <li className="pb-0">Approve the transaction </li>
                        </ol>
                    </div>
                </div>

                <br />
            </div>
        </section>
    );
};

export default PointsSection;
