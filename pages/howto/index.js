import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

const ScoreBanner = () => {
    return (
        <div>
            <h1 className="subtitle has-text-gold has-font-qatar has-text-centered is-2">Your Player&apos;s Team</h1>
            <div id="cooltable-wrapper" className="is-flex is-justify-content-center">
                <table className="cooltable table has-bg-burgundy ">
                    <thead>
                        <tr>
                            <th className="has-bottom-border-gold has-top-border-gold">
                                <h1 className="subtitle has-text-gold is-2 has-text-centered has-font-qatar">Wins</h1>
                            </th>

                            <th className="has-bottom-border-gold has-top-border-gold">
                                <h1 className="subtitle has-text-gold is-2 has-text-centered has-font-qatar">Draws</h1>
                            </th>

                            <th className="has-bottom-border-gold has-top-border-gold">
                                <h1 className="subtitle has-text-gold is-2 has-text-centered has-font-qatar">Loses</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h1 className="subtitle is-2 has-text-gold has-text-centered has-font-qatar">+3</h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-gold has-text-centered has-font-qatar">+1</h1>
                            </td>
                            <td>
                                <h1 className="subtitle is-2 has-text-gold has-text-centered has-font-qatar">0</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const HowtoPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <ScoreBanner />
        </div>
    );
};

HowtoPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'How to')), 'How to');

export default HowtoPage;
