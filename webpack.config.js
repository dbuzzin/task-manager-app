const path = require("path");

module.exports = {

    mode: "development",
    context: path.resolve(__dirname, "public"),
    entry: path.resolve(__dirname, "src", "app"),

    output: {
        path: path.resolve(__dirname, "build", "js"),
        filename: "bundle.js",
        publicPath: "/"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public"),
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [{loader: "babel-loader"}]
            },
            {
                test: /\.css?/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                context: path.resolve(__dirname, "build", "css")
                            }
                        }
                    }
                ],
                
            },
            {
                test: /\.scss?/,
                use: [
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }

}