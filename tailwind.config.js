module.exports = {
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                blue: '#0077FF',
                'light-blue': '#348CF1',
                grey: '#D1D1D1',
                'fa-black': '#101010'
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
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
}