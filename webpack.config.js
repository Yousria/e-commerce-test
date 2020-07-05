const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src'
    },
    resolve: {
        mainFields: ['module', 'main'],
        extensions: ['.mjs', '.js', '.jsx', '.json', '.scss'],
        alias: {
            '~': path.resolve('./src')
        }
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.jsx?$/,
            include: [path.join(__dirname, 'src')],
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader']
                }
            )
        }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
        }, {
                test: /\.scss$/i,
                sideEffects: true,
                use: [
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local'
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        new ExtractTextPlugin({ filename: 'css/style.css' })
    ]
}
