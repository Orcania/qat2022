import Image from 'next/image';

import groupsData from 'src/static/groups';

import styles from './team.module.scss';

const { flag_image, flex_wrapper, div } = styles;

const TeamSection = () => {
    return (
        <div>
            {groupsData.map(group => {
                return (
                    <div key={group.id} style={{ margin: '0 0 7rem 0' }}>
                        <h1 className="cooltitle2 has-text-centered has-font-akira mb-6">{group.name}</h1>
                        <div style={{ display: 'grid', placeItems: 'center' }}>
                            <div className={flex_wrapper}>
                                {group.teams.map(team => {
                                    return (
                                        <div key={team.id} className={`mx-4 ${div}`}>
                                            <div className="is-flex is-justify-content-center">
                                                <Image
                                                    src={team.img}
                                                    alt={team.name}
                                                    width={100}
                                                    height={100}
                                                    className={flag_image}
                                                />
                                            </div>
                                            <h2 className="subtitle is-6 has-text-white has-font-akira has-text-centered mt-2 mb-0">
                                                {team.name}
                                            </h2>
                                            <h2 className="subtitle is-5 has-text-orange has-font-montserrat has-text-centered ">
                                                Rarity {team.rarity}%
                                            </h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamSection;
