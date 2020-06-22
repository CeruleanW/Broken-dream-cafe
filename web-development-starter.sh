#!/bin/sh

# initialize without having it ask any questions. This will generate a package.json file
npm init -y

# Install webpack
npm install webpack webpack-cli --save-dev

# Install dependencies
#-------------------------------------------------------
# installing packages that will be bundled into your production bundle
## npm install --save {package_name}

# installing packages for development purposes
## npm install --save-dev {package_name}
#-------------------------------------------------------

mkdir src dist
cd src
touch index.js
cd ../dist
touch index.html

# add main.js in index.html

cd ..
touch webpack.config.js

# set the content of webpack.config.js
echo "const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};" >> webpack.config.js