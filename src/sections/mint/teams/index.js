import { getLayout } from 'src/layouts/section';

import groupsData from 'src/static/groups';

import styles from './team.module.scss';

const { flag_image, cooltitle } = styles;

const name = 'Team';

const TeamSection = () => {
    return (
        <div>
            {groupsData.map(group => {
                return (
                    <div key={group.id} style={{ margin: '0 0 5rem 0' }}>
                        <h1 className="cooltitle has-text-centered has-font-qatar mb-5">{group.name}</h1>
                        <div>
                            <div className="is-flex is-justify-content-center">
                                {group.teams.map(team => {
                                    return (
                                        <div key={team.id} className="mx-4">
                                            <img className={flag_image} src={team.img} alt={team.name} width={100} />
                                            <h2 className="subtitle has-text-cream has-font-qatar has-text-centered mt-2">
                                                {team.name}
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
