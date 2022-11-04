/* eslint-disable @next/next/no-img-element */
import teamData from 'src/static/about-us';

const TeamSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle2 has-text-centered has-font-akira mb-6">Our Team</h1>
            <div>
                <div className="columns is-multiline">
                    {teamData.map(team => (
                        <div className="column mb-6" key={team.id}>
                            <div className="is-flex is-align-items-centered is-justify-content-center px-4">
                                <img src={team.img} alt="" className="has-border-5-ww-o-100" />
                            </div>

                            <br />

                            <div>
                                <h2 className="cooltitle2 has-text-centered has-font-montserrat  mb-5">
                                    <b>{team.name}</b>
                                </h2>

                                <div className="is-flex is-justify-content-center mb-5">{team.logo()}</div>

                                <div className="has-text-centered">{team.description()}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
