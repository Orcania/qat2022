/* eslint-disable @next/next/no-img-element */

const StructureSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="title is-1  has-font-akira has-text-ww  mb-6 ">Allocations</h1>
            <div className="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
                <br />
                <br />

                <div>
                    <img src="/media/chart.png" alt="" style={{ width: '60vw' }} className="is-hidden-touch" />
                    <img src="/media/chart.png" alt="" style={{ width: '90vw' }} className="is-hidden-desktop" />
                </div>
            </div>
        </section>
    );
};

export default StructureSection;
