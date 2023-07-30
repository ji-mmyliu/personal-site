module.exports = {
    presets: [
        "babel-preset-vite",
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ],
};
