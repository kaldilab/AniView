## AniView

<p><a href="//developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API" target="_blank"><b>Intersection Observer</b></a>는 웹페이지의 특정 <strong>타겟 요소</strong>가 지정된 <strong>뷰포트</strong>와의 교차 여부를 비동기적으로 관찰할 수 있도록 도와주는 API이다. 즉, 특정 요소가 화면 상의 지정된 영역과 교차하는지를 관찰하다가 조건이 충족되면 알려주는 것이다. 무한스크롤 방식으로 게시글을 추가로 불러오거나 스크롤 시 특정 요소가 화면에 나타나면 애니메이션을 일으키는 등에 활용할 수 있다.</p>

<p><a href="//animate.style/" target="_blank"><b>Animate.css</b></a>는 타겟 요소에 클래스만 추가하면 <strong>CSS keyframes animation</strong>을 즉각적으로 구현할 수 있도록 도와주는 라이브러리이다. 예를 들어, 특정 요소에 <kbd>animate_animated animate_fadeIn</kbd> 클래스를 추가해두면 그 요소는 로딩 후 바로 페이드인 효과를 일으키게 된다. 직접 CSS 애니메이션을 코딩하지 않아도 다양한 애니메이션을 쉽게 구현할 수 있다.</p>

<p>이 두 API와 라이브러리를 활용하면, <strong>Scroll Animation</strong>을 비교적 손쉽게 구현할 수 있다. Intersection Observer가 대상 엘리먼트와 지정된 뷰포트 간의 교차를 감지하면 대상 엘리먼트에 Animate.css의 애니메이션 클래스가 추가되도록 설정해주면 된다. 동시에, 교차 감지 시에 image를 로딩하는 <strong>Lazy Loading</strong>도 함께 구현해보았다. Demo 사이트를 참고하고 Github에서 파일을 다운 받아 활용해보자.</p>

## Kaldi Lab

[Kaldi Lab](http://kaldilab.com/)의 AniView Website의 설명을 참고하세요.

- [ReactPress](http://kaldilab.com/wp/aniview/)