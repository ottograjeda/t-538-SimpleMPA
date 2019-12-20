// Webpack is similar to gulp BUT specialized to only bundle
// ref = https://webpack.js.org/concepts/loaders/
const webpack = require('webpack');
const path = require('path')

const getFilesFromDir = require("./files");  
const PAGE_DIR = path.join("app", "pages", path.sep);  
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

// ES6
// Tell webpack to minimize the bundle using the TerserPlugin. This is true by default in production mode.
// https://webpack.js.org/configuration/optimization/
const TerserPlugin = require('terser-webpack-plugin');

// ES5 
// uncomment, if you plan to use ES5
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 

// Requires file.js
// ref = https://gist.github.com/przemek-nowicki
const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map( filePath => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName
  })
});

// Requires file.js
// ref = https://gist.github.com/przemek-nowicki
const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce( (obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {}); 

module.exports = (env, argv) => ({
    devServer: {
         port: 8080,
         contentBase: 'https://localhost',
         writeToDisk: true // false = no files ; true = files ; ref = https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
         // Send API requests on localhost to API server get around CORS.
         /* 
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept"
         },
         */
         // Create Proxy for local client to local server
         /*
         proxy: {
            '/api': {
               target: {
                  host: "localhost",
                  protocol: 'https:',
                  port: 3000
               }
            }
         }
         */
    },
    //mode: "production", // If you use Webpack 4, you don't need to change. It remains the same in both development and production modes.
    entry: entry,
    devtool: 'false', // options = false, source-map ; source-map creates .map files
    output: {
        path: path.join(__dirname, "public"), 
        filename: "[name].js"
    },
    plugins: [
      new CopyWebpackPlugin([ { from: 'app/assets' } ]),
      ...htmlPlugins
    ],
    resolve:{
        alias:{
            '@react-native-community/async-storage': 'react-native-web',
            src: path.resolve(__dirname, "app"),  
            components: path.resolve(__dirname, "app", "components")  
        },
        modules: ['node_modules']
    },
    module: {
        rules: [
        // 1st Rule
        {
            test: /\.js$/i,
            exclude: [/node_modules/, /_nogit/],
            use: {
                loader:"babel-loader",
            },
        },
        // 2nd Rule
        // requires pkg css-loader 
        {
            test: /\.css$/,
            exclude: [/node_modules/, /_nogit/], 
            use: ["style-loader", {loader: "css-loader", options: {modules: true}}],
        },
        // 3rd Rule per 
        // ref = https://www.robinwieruch.de/react-svg-icon-components#react-svg-icon-components-webpack
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        // 4th Rule 
        // ref = https://webpack.js.org/guides/asset-management/#loading-images
        {
          test: /\.(jpe?g|png|gif)$/i, 
          use: [{
              loader: 'file-loader', 
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: '[name].[ext]'
                //name: '[path][name].[ext]?hash=[hash:20]', // for development, we want to see where the file is coming from (we preserve the [path])
              }
            }]
        },
        // 5th Rule
        {
            test: /\.s[a]ss$/i,
            use: [ 'style-loader', 'css-loader', 'sass-loader', ],
        },
        // 6th Rule 
        // ref = https://medium.com/@chanonroy/webpack-2-and-font-awesome-icon-importing-59df3364f35c
        {
            test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts/',   // where the fonts will go
                    //publicPath: '../'       // override the default path
                    //publicPath: './'        // override the default path
                }
            }]
        },
      ] // end rules
    }, // end module (not module.exports)
    // ES6 
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: 'all',
          }),
        ],
    /*
    // ES5
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          extractComments: 'all', // options = true, all ; source maps may not be created properly
        }),
      ],
    */
      splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: "initial",
              name: "vendor",
              enforce: true
            }
          }
        } // end splitChunks
    } // end optimization 
  } // end module (not module.exports)
);
