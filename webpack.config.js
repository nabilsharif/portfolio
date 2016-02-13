var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: ['./app/index'],
  },

  output: {
    path: './static/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BARCHICK_ENV': JSON.stringify(process.env.BARCHICK_ENV)
      }
    })
  ],

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot', 
          'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
        ],
        exclude: /node_modules/
      },

      {
        test: /\.json$/,
        loaders: ['json-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.scss$/, 
        loader: 'style!css!sass?indentedSyntax=sass'
      }
    ]
  }
};
