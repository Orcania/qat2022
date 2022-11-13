/* eslint-disable @next/next/no-img-element */
import styles from './prizes.module.scss';

const { root, box } = styles;

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

const PrizesSection = () => {
    return (
        <section className="" style={{ marginBottom: '8rem' }} id={root}>
            <div className={`${box} is-hidden-mobile`}>
                <h1 className="title has-text-ww has-font-akira is-4">
                    How will the <br /> prizes be <br /> distributed ?
                </h1>
                <p className=" is-size-5 has-text-ww">The prizes will be distributed as crypto gift cards.</p>
                <img src="/media/project/prize.png" alt="" />
            </div>
            <div className="columns px-2">
                <div className="column">
                    <h1 className="title is-1  has-font-akira has-text-ww  mb-6 has-text-centered-mobile">Prizes</h1>
                    <p className=" is-size-5 has-text-ww">
                        World Fantasy Cup&apos;s prizes will be distributed 72 hours after the final whistle of theFIFA
                        World Cup Final game.The prizes value will be equivalent to the mint percentage listed in the
                        structure below.
                    </p>
                </div>
                <div className="column is-flex is-justify-content-center">
                    <table
                        className="cooltable2 table is-fullwidth is-hoverable has-bg-burgundy"
                        style={{ width: '85%' }}
                    >
                        <thead>
                            <tr>
                                <th className="subtitle has-text-left has-text-white has-font-qatar is-6 px-6 py-4">
                                    <b>Team Rank</b>
                                </th>
                                <th className="subtitle has-text-left has-text-white has-font-qatar is-6 px-6 py-4">
                                    <b> Mint % per Team</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td className="subtitle has-text-left has-text-white has-font-qatar px-6 is-size-6 py-4">
                                        <b>{item.team_rank}</b>
                                    </td>
                                    <td className="subtitle has-text-left has-text-white has-font-qatar px-6 is-size-6 py-4">
                                        {item.pctg}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
