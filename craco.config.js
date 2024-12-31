const path = require(`path`);

module.exports = {
    devServer: {
        port: 5000,
    },
    webpack: {
        configure: (webpackConfig) => {
            // Modify public path dynamically based on environment
            webpackConfig.output.publicPath = '/react-tailwind-ui-docs/';
            return webpackConfig;
        },
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@redux": path.resolve(__dirname, "src/redux"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@services": path.resolve(__dirname, "src/services"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@utilities": path.resolve(__dirname, "src/utilities"),
        },
    },
};
