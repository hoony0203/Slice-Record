const stack = [
  { name: "react", url: "src/assets/img/stack/react.svg" },
  { name: "vite", url: "src/assets/img/stack/vite.svg" },
  { name: "zustand", url: "src/assets/img/stack/zustand.svg" },
  { name: "gsap", url: "src/assets/img/stack/gsap.svg" },
  { name: "axios", url: "src/assets/img/stack/axios.svg" },
  { name: "netlify", url: "src/assets/img/stack/netlify.svg" },
];

const skills = [
  {
    name: "html5, css3",
    progressValue: 48,
    script: `시맨틱한 마크업 구조에 맞춰 웹 서비스를 설계하고 유저 편의성을 추구합니다.
    웹 표준을 지키고 웹 접근성 개선에 노력합니다. 미디어 쿼리를 사용하여 반응형 웹 디자인을 할 수
    있습니다`,
  },
  {
    name: "react",
    progressValue: 55,
    script: `재사용되는 컴포넌트를 분리하여 유지보수성을 높입니다. 
    라이프 사이클에 맞춘 useEffect, useRef 등 Hooks를 사용합니다.
    Zustand, Redux를 활용한 전역 상태관리를 활용하며 재렌더링에 따른 성능 최적화에 집중합니다.`,
  },
  {
    name: "javascript",
    progressValue: 55,
    script: `반복적인 코드를 함수 분리하여 사용하고, 모듈화로 유지보수성을 향상시킵니다. 이벤트 루프의 동작 원리를 이해하여
  사용하고 ES6의 Class, Arrow Function 등의 개념을 이해하며 적절히 활용합니다.`,
  },
];

const profileScript = [
  {
    name: "01",
    subName: `기록하는 습관`,
    script: `Notion과 Obsidian, Heynote를 활용한 체계적인 일정관리와 자기계발이 습관화 되어 있습니다.`,
  },
  {
    name: "02",
    subName: `계단식 목표 설정`,
    script: `키워드 검색으로 연쇄적인 목표를 설정, 자바부터 리액트까지 백엔드와 프론트엔드를 숙지하였습니다.`,
  },
  {
    name: "03",
    subName: `몰입하는`,
    script: `집중력을 발휘해 단위 목표를 달성하며 5회의 프로젝트 목표를 완수했습니다.`,
  },
  {
    name: "04",
    subName: `살림꾼`,
    script: `프로젝트 문서 관리는 물론, 1인분 이상을 책임감 있게 달성합니다.`,
  },
];

export { stack, skills, profileScript };
