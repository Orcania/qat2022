import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import faqData from 'src/static/faq';

const FaqPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div className="container">
                {faqData.map(item => (
                    <section className="px-2" style={{ marginBottom: '5rem' }} key={item.id}>
                        <h1 className="cooltitle2 has-text-centered has-font-qatar mb-6">{item.question}</h1>
                        {item.ansComponent()}
                    </section>
                ))}
            </div>
        </div>
    );
};

FaqPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'FAQ')), 'FAQ');

export default FaqPage;
