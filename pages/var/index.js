import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

const VarPage = () => {
    return <div style={{ height: '100vh' }}></div>;
};

VarPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Project VAR')), 'Var');

export default VarPage;
