// 사용자가 가져온 값을 변수에 저장합니다.
//const project1 = false;
//const project2 = false;
//const project3 = false;
//const project4 = false;

//json에서 넘어오는 값과 트루 폴스 비교
//각 디테일 페이지에 같은 변수명으로 1 2 3 4를 저장

// project1, project2, project3, project4의 값에 따라 페이지에 보여줄 요소를 결정합니다.
if (product1) {
  // project1이 true일 경우, 해당 엘리먼트를 보이도록 설정합니다.
  document.getElementById('project1').style.display = 'block';
} else {
  // project1이 false일 경우, 해당 엘리먼트를 숨기도록 설정합니다.
  document.getElementById('project1').style.display = 'none';
}

if (product2) {
  // project2가 true일 경우, 해당 엘리먼트를 보이도록 설정합니다.
  document.getElementById('project2').style.display = 'block';
} else {
  // project2가 false일 경우, 해당 엘리먼트를 숨기도록 설정합니다.
  document.getElementById('project2').style.display = 'none';
}

if (product3) {
  // project3이 true일 경우, 해당 엘리먼트를 보이도록 설정합니다.
  document.getElementById('project3').style.display = 'block';
} else {
  // project3이 false일 경우, 해당 엘리먼트를 숨기도록 설정합니다.
  document.getElementById('project3').style.display = 'none';
}

if (product4) {
  // project4가 true일 경우, 해당 엘리먼트를 보이도록 설정합니다.
  document.getElementById('project4').style.display = 'block';
} else {
  // project4가 false일 경우, 해당 엘리먼트를 숨기도록 설정합니다.
  document.getElementById('project4').style.display = 'none';
}
