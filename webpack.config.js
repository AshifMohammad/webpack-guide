const path  = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV === "production"?"production":"development"

module.exports={
    mode:mode,
    entry: "./src/index.js", //entry where webpack start bundling the build
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].build.js"
    },
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode:   process.env.STATS || "disabled"
    })], // analyses the bundle in visual representation
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    //without additional setting this will reference to .babelrc file
                    loader: "babel-loader"
                }
            },
            {
                test:/\.less$/,
                exclude: /node_modules/,
                use:[
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    devtool: "source-map",// this will show the exact file and source code location , recommended for dev mode only
    devServer: {
        contentBase:"./dist"
    }
    // cache: {
    //     // 1. Set cache type to filesystem
    //     type: 'filesystem',
    //
    //     buildDependencies: {
    //         // 2. Add your config as buildDependency to get cache invalidation on config change
    //         config: [__filename],
    //
    //         // 3. If you have other things the build depends on you can add them here
    //         // Note that webpack, loaders and all modules referenced from your config are automatically added
    //     },
    // },
    // optimization: {
    //     chunkIds: "named"
    // }
}