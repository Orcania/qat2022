import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

const HowtoPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <table className="table has-bg-burgundy has-text-gold">
                <thead>
                    <tr className="has-text-burgundy">
                        <th>
                            <h1>Wins</h1>
                        </th>

                        <th>
                            <h1>Draws</h1>
                        </th>

                        <th>
                            <h1>Loses</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h1>+3</h1>
                        </td>
                        <td>
                            <h1>+1</h1>
                        </td>
                        <td>
                            <h1>0</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

HowtoPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'How to')), 'How to');

export default HowtoPage;
