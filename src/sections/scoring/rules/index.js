const RulesSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="subtitle has-text-ww has-font-akira has-text-centered is-3">Rules</h1>
            <br />
            <p className="has-text-white has-font-qatar is-size-5 has-text-centered">
                The scoring mechanism will work as follows:
                <br />
                <br />
                NFT Team’s total number of points.
                <br />
                <br />
                <div className="is-flex is-justify-content-center">
                    <p className="has-text-justified" style={{ width: '90%' }}>
                        In case 2 or more teams end up having the same total number of points, we will differentiate
                        between them with the following rules:
                        <br />
                        <br />
                        <ol style={{ listStylePosition: 'inside' }}>
                            <li className="pb-3">
                                The goal average: Total number of scored vs received goals of the NFT Teams.
                            </li>
                            <li className="pb-3">Total number of scored goals by the NFT Teams.</li>
                            <li className="pb-3">
                                Total number of national teams in the NFT Team that made it to the 2<small>nd</small>{' '}
                                Round.
                            </li>
                            <li className="pb-3">Clean Play: The NFT Team with the lowest number of yellow cards.</li>
                            <li className="pb-3">
                                Players Performance, ranked as follows:
                                <ol type="a" className="ml-6 pt-4">
                                    <li>
                                        Best Forwards: Total number of goals scored by the forwards of the NFT Team.
                                    </li>
                                    <li>
                                        Best Goalkeeper: Lowest number of goals received by the Goalkeeper of the NFT
                                        Team.
                                    </li>
                                    <li>
                                        Best Defenders: Lowest total number of goals received by the Defenders of the
                                        NFT Team.
                                    </li>
                                </ol>
                            </li>
                            <li className="pb-3">Bought on Secondary market vs Minted on the WFC’s website.</li>
                            <li className="pb-3">
                                If after applying all the above mentioned differentiators we still have a similar score
                                between two different teams, these two teams will then split the total earnings
                                allocated to their rank.
                                <br /> <br />
                                (Example: If Team X is ranked number 1 and Team Y is also ranked number 1; these two
                                teams will split the total earnings of Rank 1 and 2. Team X will receive 2.5% and Team Y
                                will also receive 2.5%).
                            </li>
                        </ol>
                    </p>
                </div>
            </p>
        </section>
    );
};

export default RulesSection;
