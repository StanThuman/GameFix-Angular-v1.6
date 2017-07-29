var path = require('path');
var mySTring = "lsdjfjk";

module.exports = {
    entry: './client/app/app.js',
    watch: true,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
       alias: {
           jquery: "jquery/src/jquery"
       }
   },
    module: {
      rules: [  //load multiple loaders
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: {
            loader: 'babel-loader',
            options: {
              "presets": ['env']
            }
          }
        }, //end babel loader
        { //scss loader
          test: /\.scss$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
        },

        {
           test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
           use: 'url-loader?limit=10000',
         },
         {
           test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
           use: 'file-loader',
         }

      ] //end rules
    }//,
    //plugins: new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })
}
