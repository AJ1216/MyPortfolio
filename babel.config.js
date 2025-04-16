// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['> 0.25%', 'not dead'], // specify the browser support
                },
            },
        ],
        '@babel/preset-react', // if you're using React
    ],
};
