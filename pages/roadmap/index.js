import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import faqData from 'src/static/faq';

const FaqPage = () => {
    return (
        <div>
            <div className="container">
                <br />
                <br />
                {faqData.map(item => {
                    const q = typeof item.question === 'string' ? item.question : item.question();
                    return (
                        <section className="px-2" style={{ marginBottom: '8rem' }} key={item.id}>
                            {q}
                            {item.ansComponent()}
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

FaqPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Roadmap')), 'Roadmap');

export default FaqPage;
