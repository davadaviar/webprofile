const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "development",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "src")
        },
        host: "localhost",
        client: {
            overlay: false
        },
        compress: true,
        open: true,
        port: 9000,
        liveReload: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.[contenthash].css",
        })
    ]
})