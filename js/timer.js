   function clock() {
    // 1) 날짜 객체 생성
    var now = new Date();
    console.log(now); //Thu Jan 28 2021 13:04:13 GMT+0900 (대한민국 표준시)
    var yy = now.getFullYear();
    var mm = now.getMonth() + 1; //0~11 + 1 => 1~12
    var dd = now.getDate();
    var day = now.getDay(); //0(일)~6
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    console.log(yy, mm, dd, day, h, m, s);

    // 2) 숫자요일을 문자요일로 변경
    var dayArr = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

    // 5) 0시만 12시로 교체
    // false : 숫자 0, 문자 '', undefined, null, NaN
    if (h === 0) h = 12;

    // 6) 시, 분, 초에서만 한자리일 경우 '0'을 추가하여 두자리로 변경
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    // 객체.innerHTML = 값; 대상객체 내부에 html을 삽입해준다
    // 2021-1-28 목요일 오후 12:18:07
    var result = yy + '-' + mm + '-' + dd + ' ' + dayArr[day] + ' ' + ' ' + h + ':' + m + ':' + s;
    console.log(result);
    document.getElementById('realTime').innerHTML = result;
    // $('#digital').html(result); 제이쿼리
  }
  
  window.addEventListener('load', function () {
    clock(); //로딩후 최초 한번만 출력

    // 1초에 한번씩 clock() 함수를 호출
    // setInterval(함수, 시간간격);
    var timer = setInterval(clock , 1000);
  });