import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

const HowtoPage = () => {
    return <div className="" style={{ minHeight: '100vh' }}></div>;
};

HowtoPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'How to')), 'How to');

export default HowtoPage;
