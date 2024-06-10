const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',//번들링 시작할 파일
  output: {//번들링된 파일의 출력 설정을 정의합니다.
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {//Webpack Dev Server 설정으로, 개발 중에 로컬 서버를 실행하여 실시간 리로딩을 지원합니다.
    static: "./dist",
    hot: true,
    open: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {//파일의 처리 방법을 정의하는 로더 설정을 포함합니다.
    rules: [//이 설정은 .js 파일에 babel-loader를 사용하여 Babel을 통해 최신 JavaScript 문법을 구형 브라우저에서도 호환되게 변환합니다.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
