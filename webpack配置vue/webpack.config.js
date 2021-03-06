const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), //动态获取路径
        filename: "bundle.js",
        publicPath: "dist/"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        //当加载的图片，小于limit时，会将图片编译成base64字符串形式
                        //当加载的图片，大于limit时，需要使用file-loader模块进行加载
                        limit: 8196, //8kb
                        name: "img/[name].[hash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    resolve: {
        //alias:别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};