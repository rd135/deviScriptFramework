DeviFramework javascript ver. 1

가이드 및 설명
1. npm init -y : 명령어는 새로운 Node.js 프로젝트를 초기화할 때 사용되며, 기본적인 package.json 파일을 생성합니다. 이 파일은 프로젝트의 메타데이터와 의존성을 관리하는 데 사용됩니다.

2. package.json 파일은 프로젝트의 중요한 파일로, 다음과 같은 정보를 포함합니다:
 > 프로젝트 메타데이터: 이름, 버전, 설명, 메인 파일, 리포지토리 정보, 키워드, 저자, 라이선스 등.
 > 스크립트: 빌드, 테스트, 시작 등의 명령어를 정의합니다.
 > 의존성: 프로젝트가 의존하는 외부 라이브러리와 모듈을 나열합니다.
 > 개발 의존성: 개발 중에만 필요한 라이브러리와 도구를 나열합니다.

3. npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env webpack-dev-server 
 > Webpack은 모듈 번들러로서 프로젝트의 파일을 묶어주는 역할을 해 줍니다.
 > Babel은 JavaScript 컴파일러로서 최신 JavaScript 코드를 구형 브라우저에서도 실행 가능하도록 변환해 줍니다.