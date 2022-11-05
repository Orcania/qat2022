/* eslint-disable @next/next/no-img-element */

const data = [
    {
        id: 1,
        name: 'Senegal',
        status: 'Lost',
        points: '0',
    },
    {
        id: 2,
        name: 'Saudi Arabia',
        status: 'Lost',
        points: '0',
    },
    {
        id: 3,
        name: 'South Korea',
        status: 'Lost',
        points: '0',
    },
    {
        id: 4,
        name: 'Germany',
        status: 'Won',
        points: '+3',
    },
    {
        id: 5,
        name: 'England',
        status: 'Won',
        points: '+3',
    },
    {
        id: 6,
        name: 'Portugal',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 7,
        name: 'Wales',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 8,
        name: 'Netherlands',
        status: 'Lost',
        points: '0',
    },
    {
        id: 9,
        name: 'Brazil',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 10,
        name: 'Morocco',
        status: 'Won',
        points: '+3',
    },
    {
        id: 11,
        name: '',
        status: '',
        points: '+15',
    },
];

const ExampleSection = () => {
    return (
        <section className="px-5 mb-6">
            <h1 className="cooltitle2 has-text-centered has-font-akira mb-6">Example</h1>
            <br />
            <br />
            <div>
                <div className="columns is-vcentered">
                    <div className="column ">
                        <img src="/media/team_ex.png" alt="" />
                    </div>
                    <div className="column">
                        <div className="ctable-wrapper is-flex is-justify-content-center">
                            <table className="cooltable2 table is-fullwidth is-hoverable has-bg-burgundy">
                                <thead>
                                    <tr>
                                        <th className="subtitle has-text-centered has-text-white has-font-qatar is-4">
                                            <b>Player from</b>
                                        </th>
                                        <th className="subtitle has-text-centered has-text-white has-font-qatar is-4">
                                            <b>Game Status</b>
                                        </th>
                                        <th className="subtitle has-text-centered has-text-white has-font-qatar is-4">
                                            <b>Points</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td className="subtitle has-text-centered has-text-white has-font-qatar">
                                                {item.name}
                                            </td>
                                            <td className="subtitle has-text-centered has-text-white has-font-qatar">
                                                {item.status}
                                            </td>
                                            <td className="subtitle has-text-centered has-text-white has-font-qatar">
                                                {item.points}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExampleSection;
