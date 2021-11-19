const package = require('./package.json')
module.exports = {
    customFields: {    
        package: `${package}` 
    },
    title: 'My DevOps Journey with Chef',
    tagline: 'Four Part Series of the DevOps Journey with Chef by Mike Butler',
    url: 'https://snohio.github.io/devops/',
    baseUrl: '/devops/',
    favicon: 'img/devops.ico',
    organizationName: 'snohio', // Usually your GitHub org/user name.
    projectName: 'devops', // Usually your repo name.
    onBrokenLinks: 'ignore',

    themeConfig: {
        navbar: {
            title: 'My DevOps Journey',
            logo: { alt: 'Chef', src: 'img/devops.png' },
            // hideOnScroll: true,
            items: [
                { to: 'docs/journey/begins', label: 'The Saga Begins', position: 'right' },
                { to: 'docs/practice/awakens', label: 'DevOps Into Practice', position: 'right' },
                { to: 'docs/transform/start', label: 'Transformation Tips', position: 'right' },
                { to: 'docs/chef/codecan', label: 'Cooking Up Awesomeness', position: 'right' },
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
                    editUrl: 'https://github.com/snohio/devops/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
