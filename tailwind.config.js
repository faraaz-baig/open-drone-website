module.exports = {
    theme: {
        extend: {
            colors: {
                blue: '#0077FF',
                'light-blue': '#348CF1',
                grey: '#D1D1D1',
                'fa-black': '#272A2A'
            },
            fontFamily: {
                'sans': ['Roboto'],
                'title': ['Oswald'],
                'body': ['Montserrat']
            }
            
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'hover']
        }
    },
    plugins: [],
    purge: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
    ]
}