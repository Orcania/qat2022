const data = [
    {
        id: 1,
        team_rank: '1',
        pctg: '3',
    },
    {
        id: 2,
        team_rank: '2',
        pctg: '2',
    },
    {
        id: 3,
        team_rank: '3',
        pctg: '1.5',
    },
    {
        id: 5,
        team_rank: '4 & 5',
        pctg: '1',
    },
    {
        id: 6,
        team_rank: '6 to 10',
        pctg: '0.75',
    },
    {
        id: 7,
        team_rank: '11 to 20',
        pctg: '0.5',
    },
    {
        id: 8,
        team_rank: '21 to 32',
        pctg: '0.25',
    },
    {
        id: 9,
        team_rank: '33 to 100',
        pctg: '0.04',
    },
    {
        id: 10,
        team_rank: '101 to 500',
        pctg: '0.02',
    },
];

const StructureSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle3 has-text-centered has-font-akira mb-6 p-5">Structure</h1>
            <div className="is-flex is-justify-content-center">
                <table className="cooltable2 table is-fullwidth is-hoverable has-bg-burgundy" style={{ width: '40vw' }}>
                    <thead>
                        <tr>
                            <th className="subtitle has-text-centered has-text-white has-font-qatar is-4">
                                <b>Team Rank</b>
                            </th>
                            <th className="subtitle has-text-centered has-text-white has-font-qatar is-4">
                                <b> Mint % per Team</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td className="subtitle has-text-centered has-text-white has-font-qatar">
                                    <b>{item.team_rank}</b>
                                </td>
                                <td className="subtitle has-text-centered has-text-white has-font-qatar">
                                    {item.pctg}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default StructureSection;
