/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

const ReadMore = ({ text }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="text">
            <div dangerouslySetInnerHTML={{ __html: isReadMore ? text.slice(0, 150) : text }} />
            {/* {isReadMore ? text.slice(0, 150) : text} */}
            <span onClick={toggleReadMore} className="read-or-hide is-clickable has-text-gold">
                {isReadMore ? '...read more' : ' show less'}
            </span>
        </p>
    );
};

const DescriptionSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle2 has-text-centered has-font-qatar mb-6">Description</h1>
            <p className="has-text-cream has-font-qatar is-size-5 has-text-centered">
                <ReadMore
                    text={`
                        World Fantasy Cup is a play-2-win NFT project, tailored specifically for all passionate \n \n
                        football fans from all over the world.
                        <br />
                        <br />
                        The project allows minters to mint an NFT that represents a team of 11 nationalities,
                        <br />
                        randomly selected by our generator. Each NFT team is unique and has 11 different
                        <br />
                        nationalities (players).
                        <br />
                        <br />
                        The NFT itself is a proof of participation in the upcoming World Fantasy Cup season of
                        <br />
                        QAT2022, that will live on the Ethereum blockchain for eternity.
                        <br />
                        <br />
                        The project, will enable holders and the football community to interact across our social
                        <br />
                        channels on different topics linked to the official Tournament.
                        <br />
                        <br />
                        Based on the real scores of the real national teams participating in the official tournament,
                        <br />
                        your minted NFT team will accumulate points that will enable you to collect prizes!
                        <br />
                        <br />
                        We will use an off-chain server that will fetch your team’s score directly on OpenSea,
                        <br />
                        allowing you to see the rankings of the entire World Fantasy Cup community.
                    `}
                />
            </p>
        </section>
    );
};

export default DescriptionSection;
