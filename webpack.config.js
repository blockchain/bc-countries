module.exports = {
  devtool: "source-map",
  entry: './src.js',
  output: {
    filename: 'dist/bc-countries.js',
    library: 'bc-countries',
    libraryTarget: 'umd'
  },
  externals: {
    "google-libphonenumber": true,
    "digits-trie": true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          'es2015'
        ]
      }
    }]
  },
};
