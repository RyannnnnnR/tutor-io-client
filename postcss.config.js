const purgecss = require('@fullhuman/postcss-purgecss')({
    'content': [
        './src/**/*.vue',
        './public/index.html'
    ],
    whitelistPatternsChildren: [/^CodeMirror|^cm/, /^ql/],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || []
})

module.exports = {
    'plugins': [
        require('tailwindcss')('tailwind.config.js'),
        require('autoprefixer')(),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
}