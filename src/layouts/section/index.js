/* eslint-disable @next/next/no-img-element */
import Logo from 'src/components/commons/logo';
import data from 'src/static/social-media';

import styles from './section.module.scss';

const { header, sectiontitle, img_container, text_container, link, socialMedia } = styles;

const SectionLayout = ({ children, name }) => {
    const namee = typeof name === 'function' ? name() : name;
    return (
        <div className="py has-bg-burgundy " styñe={{ position: 'relative' }}>
            <div className={img_container}>
                <img src="/media/footbanner.png" alt="" />
            </div>
            <div className="container px-5">
                <div className={` ${header}`}>
                    <div className={text_container} style={{ height: '100%' }}>
                        <div>
                            <Logo />
                            <br />
                            <div className={sectiontitle}>
                                <h1 className=" title has-text-white has-font-montserrat has-text-centered-mobile">
                                    {namee}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={socialMedia}>
                        {data.map(item => (
                            <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className={link}>
                                <span className="icon is-size-4">{item.icon()}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div>{children}</div>
            </div>
        </div>
    );
};

export const getLayout = (page, sectionName = 'Section name') => (
    <SectionLayout name={sectionName}>{page}</SectionLayout>
);

export default SectionLayout;
