const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        assetModuleFilename: "img/[name][ext]",
        clean: true,
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
        })
    ]
}