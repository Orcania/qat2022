const ScoreBanner = () => {
    return (
        <section style={{ marginBottom: '5rem' }}>
            <h1 className="subtitle has-text-white has-font-qatar has-text-centered is-2">Your Player&apos;s Team</h1>
            <div id="cooltable-wrapper" className="is-flex is-justify-content-center">
                <table className="cooltable table has-bg-burgundy ">
                    <thead>
                        <tr>
                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">Wins</h1>
                            </th>

                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">Draws</h1>
                            </th>

                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">Loses</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">+3</h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">+1</h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">0</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ScoreBanner;
