import socialmedia from 'src/static/social-media';

const Footer = () => {
    return (
        <footer className="footer has-bg-cream py-6">
            <div className="container">
                <div className="content has-text-centered">
                    <h1 className="subtitle is-6 has-text-centered has-text-burgundy has-font-qatar">
                        World Fantasy Cup is not affiliated with the FIFA, and not accredited by the <br /> Official
                        World Cup Qatar 2022 Tournament.
                    </h1>
                    <div className="social-media is-flex is-justify-content-center">
                        {socialmedia.map(item => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="is-size-4 mx-3"
                            >
                                <span className="icon has-text-burgundy ">{item.icon()}</span>
                            </a>
                        ))}
                    </div>
                    <h1 className="subtitle is-6 has-text-centered has-text-burgundy has-font-qatar">
                        © 2022 World Fantasy Cup – All Rights Reserved
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
