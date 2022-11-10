const ScoreBanner = () => {
    return (
        <section style={{ marginBottom: '5rem' }}>
            <h1 className="subtitle has-text-white has-font-qatar has-text-centered is-2">
                <b>Points per Player if his Team</b>
            </h1>
            <div id="cooltable-wrapper" className="is-flex is-justify-content-center">
                <table className="cooltable table has-bg-burgundy ">
                    <thead>
                        <tr>
                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">
                                    <b>Wins</b>
                                </h1>
                            </th>

                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">
                                    <b>Draws</b>
                                </h1>
                            </th>

                            <th className="has-bottom-border-white has-top-border-white">
                                <h1 className="subtitle has-text-white is-2 has-text-centered has-font-qatar">
                                    <b>Loses</b>
                                </h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">
                                    <b>+3</b>
                                </h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">
                                    <b>+1</b>
                                </h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-white has-text-centered has-font-qatar">
                                    <b>0</b>
                                </h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ScoreBanner;
