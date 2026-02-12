const LIVE_URL = 'https://LANcedillo.github.io/portafolio';
const DEV_URL = '/';
const SCRIPT = process.env.npm_lifecycle_script || '';
let base_url = DEV_URL;

if (SCRIPT.includes('astro build')) {
    base_url = LIVE_URL;
}

export const menu = [
    {
        href: base_url,
        label: 'Home',
    },
    {
        href: '/projects',
        label: 'Projects',
    },
    {
        href: '/blog',
        label: 'Blog',
    },
]