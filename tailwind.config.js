module.exports = {
    theme: {
        extend: {
            colors: {
                blue: '#0077FF',
                'light-blue': '#348CF1',
                grey: '#D1D1D1',
                'fa-black': '#202020'
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
            textOpacity: ['active', 'hover']
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    purge: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
    ]
}