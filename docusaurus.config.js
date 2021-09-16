const package = require('./package.json')
module.exports = {
    customFields: {    
        package: `${package}` 
    },
    title: 'My DevOps Journey with Chef',
    tagline: 'Four Part Series of the DevOps Journey with Chef by Mike Butler',
    url: 'https://github.optum.com/pages/mbutl11/devops',
    baseUrl: '/',
    favicon: 'img/devops.ico',
    organizationName: 'mbutl11', // Usually your GitHub org/user name.
    projectName: 'devops', // Usually your repo name.
    onBrokenLinks: 'ignore',

    themeConfig: {
        navbar: {
            title: 'My DevOps Journey',
            logo: { alt: 'Chef', src: 'img/devops.png' },
            // hideOnScroll: true,
            items: [
                { to: 'docs/journey/begins', label: 'The Saga Begins', position: 'right' },
                { to: 'docs/devops/awakens', label: 'The Force Awakens', position: 'right' },
                { to: 'docs/devops/awakens', label: 'A New Hope', position: 'right' },
                { to: 'docs/devops/awakens', label: 'Rogue One', position: 'right' },
            ],
        },
        footer: {
            style: 'dark',
           copyright: `Copyright © ${new Date().getFullYear()} - v${package.version}`,
        },
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.optum.com/mbutl11/devops/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
