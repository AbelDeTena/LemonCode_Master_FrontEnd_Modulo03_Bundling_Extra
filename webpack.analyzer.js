const {merge} = require("webpack-merge");
const base = require("./webpack.prod");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge( base, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})