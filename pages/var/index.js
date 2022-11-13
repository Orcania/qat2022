import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import MintRulesSection from 'src/sections/var/mint-rules';
import PrizesSection from 'src/sections/var/prizes';
import StructureSection from 'src/sections/var/structure';

const VarPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <br />
            <br />
            <br />
            {/* <ClasificationSection />
        
            <DescriptionSection /> */}
            <PrizesSection />
            <MintRulesSection />
            <StructureSection />
        </div>
    );
};

VarPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Project')), 'Project');

export default VarPage;
