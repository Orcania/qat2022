import Navbar from 'src/components/commons/navbar';
import Footer from 'src/components/commons/footer';

const MainLayout = props => {
    const { children } = props;

    return (
        <>
            <Navbar />
            <div className="has-bg-burgundy" style={{ paddingTop: '5rem' }}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;
