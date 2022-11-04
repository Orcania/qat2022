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
                        <h1 className="cooltitle4 has-text-centered has-font-akira mb-6">
                            {item.question}
                            <br />
                        </h1>
                        {item.ansComponent()}
                    </section>
                ))}
            </div>
        </div>
    );
};

FaqPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Roadmap')), 'Roadmap');

export default FaqPage;
