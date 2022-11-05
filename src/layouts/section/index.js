import Logo from 'src/components/commons/logo';
import styles from './section.module.scss';

const { header, sectiontitle } = styles;

const SectionLayout = ({ children, name }) => {
    const namee = typeof name === 'function' ? name() : name;
    return (
        <div className="py-6 has-bg-burgundy">
            <div className="container px-5" style={{ paddingTop: '6rem' }}>
                <div className={`mb-6 ${header}`}>
                    <Logo />
                    <div className={sectiontitle}>
                        <h1 className=" title has-text-white has-font-akira has-text-centered-mobile">{namee}</h1>
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
