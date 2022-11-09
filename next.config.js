module.exports = {
    reactStrictMode: true,
    // i18n: {
    //     locales: ['en'],
    //     defaultLocale: 'en',
    // },
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'https://server.worldfantasycup.com',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },
};
