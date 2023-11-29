/*
메서드 문법
- jQuery는 속성을 사용하는 방식은 거의 없고 대부분 메서드화 시켜서 사용한다.
- 메서드 괄호() 안에 매개변수를 어떻게 작성하는지에 따라 다양한 유형이 나뉜다.
- 메서드에 따라서 한 개 유형만 가질 수도 있고 여러 개 유형을 가질 수도 있다.
- 게터(get~~) 메서드는 객체의 값을 얻어오는 메서드를 의미한다.
- 세터(set~~) 메서드는 객체의 값을 변경하는 메서드를 의미한다.
- javascript는 get과 set을 구분했지만 jQuery는 한 메서드로 같이 사용한다.

1.매개변수가 없는 유형  ex) $('선택자').메서드();
2.매개변수가 한개인 유형  ex) $('선택자').메서드(값);
3.매개변수가 여러개인 유형  ex) $('선택자').메서드(값1,값2,...);
4.매개변수가 함수인 유형  ex) $('선택자').메서드(function(){});
5.매개변수가 객체방식인 유형  ex) $('선택자').메서드({ 옵션: 값, 옵션: 값});
*/

/*
메서드 체이닝
- 객체선택 후 메서드 뒤에 또 메서드를 붙이는 것을 메서드 체이닝이라고 합니다.
- 먼저 쓴 코드가 먼저 처리되고 나중에 쓴 태그는 나중에 처리된다.
*/

$(document).ready(function () {
  //매개변수가 없는 유형
  let text = $("h1").html(); //게터
  console.log(text);

  //매개변수가 한개인 유형
  $("h1").html("title tag"); //세터

  //매개변수가 두개인 유형
  $("h1").css("color", "red"); //세터

  //매개변수가 함수인 유형
  $("h1").html(function (index, text) {
    text = "제목태그";
    return text + (index + 1);
  });

  //매개변수가 객체인 유형
  $("h1").css({
    backgroundColor: "red",
    color: "yellow",
  });

  //메서드 체이닝
  $("h1").first().css("background-color", "black");
});
