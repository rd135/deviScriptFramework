const path = require('path');

module.exports = {
  entry: './src/index.js',//번들링 시작할 파일
  output: { //번들링된 파일의 출력 설정을 정의합니다.
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {//파일의 처리 방법을 정의하는 로더 설정을 포함합니다.
    rules: [//이 설정은 .js 파일에 babel-loader를 사용하여 Babel을 통해 최신 JavaScript 문법을 구형 브라우저에서도 호환되게 변환합니다.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development',//번들링 모드를 설정합니다. Webpack은 모드에 따라 빌드 최적화 설정을 자동으로 적용합니다.
  devServer: {//Webpack Dev Server 설정으로, 개발 중에 로컬 서버를 실행하여 실시간 리로딩을 지원합니다.
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,  // 핫 모듈 교체(HMR) 활성화
    watchFiles: ['src/**/*'],  // 감시할 파일 경로 설정
  }
};
