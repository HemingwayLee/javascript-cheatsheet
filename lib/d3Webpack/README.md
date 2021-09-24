# What

## webpack dev server
* need to `npm install webpack-dev-server`

* In `package.json`
```json
{
  "scripts": {
    "build": "webpack",
    "start": "webpack-cli serve --mode development"
  },
  "dependencies": {
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0"
  }
}
```

* In `webpack.config.js`, `library` must be there
```javascript
module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'myLib'
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true
  }
};
```

# How to run
* Run locally
```
npm install
npm run build
npm run start
```

* Run by docker
```
docker build -t webpackdevserver .
docker run -it --rm -p 9000:9000 webpackdevserver /bin/bash -c "npm run start"
```

