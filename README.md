환경구성

- VSCODE
- node js
- npm
- Expo / Expo Go app

---

일반적인 네이티브 앱의 경우
완성한 코드를 컴파일하기 위하여
java 와 xcode를 이용 → .apk / .ipa 의 앱을 구성 함
그 후 각각의 스토어로 전달하여
다운로드 시 js와 css코드를 받는다

---

자바스크립트 코드를 넣고 그 코드는 os와 통신

- 리액트 웹의 경우
- React Component HTML - ReactJS - Browser DOM

으로 html을 만들어 JavaScript으로 바꾸어 브라우저가 실행

![image](https://user-images.githubusercontent.com/35837185/187458995-d0f49134-5a4a-4110-9464-6a7aa1afcf69.png)

- React Native는 인터페이스(번역기)로서 OS 사이에 있음

리액트 네이티브는 bridge를 통하여 OS가 요소를 만드는 구조

따라서 리액트 네이티브 코드 만으로 각각의 OS에 맞는 화면이 만들어 짐


![image](https://user-images.githubusercontent.com/35837185/187459211-1e527005-15f8-4105-9a89-ec1419d36a9e.png)

OS(Native)가 Event를 받아 메시지를 Bridge를 통하여 앱의 JavaScript로 전달
실행응답은 역순

| 따라서 브라우저가 아님!
자바스크립트는 개발자들이 OS와 메시지를 주고받기 위한 레이어일 뿐

---

stet1. 프로젝트 생성

| npx create-expo-app zebiWeather

| cd zebiWeather

step2. 실행

| npm start

expo 계정 로그인
| expo login

expo 애플리케이션에는 모든 인프라 구성이 들어있음
JavaScript부분을 수정하여 앱으로 전달

참고

| https://docs.expo.dev/get-started/create-a-new-app/

---

tool

Snack 웹 소개

---

- 웹 사이트가 아니다 / div x
div가 없음 View 라는 컨테이너를 이용하여 import 함

- text는 text component안에

- 일부 style css를 사용할 수 없음

| stylesheet.create - 오브젝트
필수는 아니지만 자동완성을 위해 stylesheet.create 사용

| Status-bar 는 서드파티 패키지

| 리액트 네이티브는 개발자를 위한 인터페이스

| 리액트 네이티브는 오류 피드백이 장점

---

| https://reactnative.dev/docs/components-and-apis

Components

옛날 버전에서는 여러 컴포넌트가 있었지만 많은 현재 컴포넌트가 지원되지 않음

why?

과거 많은 컴포넌트와 APIs를 지원하였지만 유지 관리가 어려워져
리액트네이티브에만 집중하기 위하여 커뮤니티 패키지로 지원하도록 변화함

---

expo로 돌아와서

expo SDK

지금은 리액트네이티브doc팀이 지원되지 않는 패키지들은

expo팀이 관리하는 패키지로 주로 사용하게 됨

| https://docs.expo.dev/versions/latest/

---

Layout System

웹 과의 차이점

- 기본적으로 모든 View는 Flex Container
View의 Flex로 비율로 부모 기준으로사이즈를 조절
- Flex Direction은 Column <-> 웹 row와 다름
- 레이아웃 사이즈에 height width를 사용하지 않음 - Flex 이용


![image](https://user-images.githubusercontent.com/35837185/187460608-968fe46d-fcb3-4ae0-99ad-d8b29d24fd17.png)
