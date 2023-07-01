$(document).ready(function () {
  /* ======================================= */
  $(window).resize(function () {
    var subWidthSizing = $(window).width();
    if (subWidthSizing >= 1199) {
      $(".tablet-gnb-menu-list").slideUp(10);
    } else if (subWidthSizing >= 768) {
      $(".gnb-pc-sub-menu").slideUp(10);
      $(".gnb-pc-main-menu li a").removeClass("on");
      $(".best-menu-item").show();
    } else if (subWidthSizing < 768) {
      $(".tablet-gnb-menu-list").slideUp(10);

      /* 베스트메뉴 슬라이드-모바일버전 */
      $(".best-menu-item").eq(0).siblings().hide(); //0번째 슬라이드 외의 슬라이드 숨김
      let bestMenuIdx = 0; //현재 슬라이드의 인덱스 번호
      let bestMenuCount = $(".best-menu-item").length;

      function fadeBestMenu() {
        /* 슬라이드 페이드인-페이드아웃 */
        $(".best-menu-item").eq(bestMenuIdx).fadeIn();
        $(".best-menu-item").eq(bestMenuIdx).siblings().fadeOut();
        bestMenuIdx++; //슬라이드 인덱스+1
        if (bestMenuIdx > bestMenuCount) {
          bestMenuIdx = 0; //전체 슬라이드 갯수를 초과하면 인덱스 0으로 초기화
        }
      }
      let bestInterval = setInterval(fadeBestMenu, 3000);
    }
  });

  /*pc 네비게이션*/
  $(".gnb-pc-main-menu li a").mouseover(function () {
    $(".gnb-pc-sub-menu").slideDown();
  });

  $(".gnb-pc-sub-menu").mouseleave(function () {
    $(".gnb-pc-sub-menu").slideUp();
    $(".gnb-pc-main-menu li a").removeClass("on");
  });

  //서브메뉴에 mouseover시 해당 메인메뉴 색상 변경
  $(".pc-sub-menu").mouseover(function () {
    let subIdx = $(this).index(); //현재 서브메뉴 인덱스번호
    $(".gnb-pc-main-menu li").eq(subIdx).children("a").addClass("on");
    $(".gnb-pc-main-menu li")
      .eq(subIdx)
      .siblings()
      .children("a")
      .removeClass("on");
  });

  /* 태블릿, 모바일 네비게이션 */
  $(".tablet-drawer-menu").click(function () {
    $(".tablet-gnb-menu-list").toggleClass("active");
    let checkClass = $(".tablet-gnb-menu-list").hasClass("active"); // 클래스를 가지는지 확인
    if (checkClass == true) {
      $(".tablet-gnb-menu-list").slideDown();
    } else {
      $(".tablet-gnb-menu-list").slideUp();
      $(".tablet-gnb-menu li a")
        .parent()
        .siblings("li")
        .children(".tablet-sub-menu")
        .slideUp();
      $(".tablet-gnb-menu li a")
        .parent()
        .siblings("li")
        .children("a")
        .removeClass("active");
    }
  });

  $(".tablet-gnb-menu li a").click(function () {
    $(this).toggleClass("active");
    $(this).siblings("ul").slideToggle();
    $(this).parent().siblings("li").children(".tablet-sub-menu").slideUp();
    $(this).parent().siblings("li").children("a").removeClass("active");
  });

  /* ==================== 메인 슬라이드 ==================== */
  $(".slide-item a").eq(0).siblings().hide(); //0번째 슬라이드 외의 슬라이드 숨김
  let nowIdx = 0; //현재 슬라이드의 인덱스 번호
  let imgCount = $(".slide-item a").length - 1; //전체 슬라이드 갯수

  function fadeSlide() {
    /* 슬라이드 페이드인-페이드아웃 */
    $(".slide-item a").eq(nowIdx).fadeIn();
    $(".slide-item a").eq(nowIdx).siblings().fadeOut();
    /* 슬라이드 버튼 */
    $(".slide-btn li").eq(nowIdx).addClass("on");
    $(".slide-btn li").eq(nowIdx).siblings().removeClass("on");
    nowIdx++; //슬라이드 인덱스+1
    if (nowIdx > imgCount) {
      nowIdx = 0; //전체 슬라이드 갯수를 초과하면 인덱스 0으로 초기화
    }
  }
  setInterval(fadeSlide, 3000);

  /* 슬라이드 버튼 클릭시 클릭한 인덱스번호로 슬라이드 변경 */
  $(".slide-btn li").click(function () {
    nowIdx = $(this).index();
    $(".slide-item a").eq(nowIdx).fadeIn();
    $(".slide-item a").eq(nowIdx).siblings().fadeOut();
    $(".slide-btn li").eq(nowIdx).addClass("on");
    $(".slide-btn li").eq(nowIdx).siblings().removeClass("on");
  });
  /* ================================================= */

  $(".more-btn").click(function () {
    alert("페이지 준비중 입니다");
  });

  /* ==================== 프렌차이즈 ==================== */
  $(window).scroll(function () {
    $(".brand-item").each(function () {
      let objectTop = $(".best-menu-item-inner").offset().top;
      let windowTop = $(window).scrollTop(); //현재스크롤
      if (windowTop >= objectTop) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  /* ================================================= */

  /* 어워드 롤링 */
  let awardWidth = $(".award-item").length;
  let itemWidth = $(".award-item").width;
  let totalWidth = awardWidth * itemWidth;

  $(".award-item-inner").css("width", totalWidth);
});

//롤링베너 만들기
let roller = document.querySelector(".award-item-inner");
roller.id = "roller1"; // 아이디 부여

let clone = roller.cloneNode(true); // cloneNode(true) 사용하여 자식까지 복제/ 기본값 false
clone.id = "roller2";
document.querySelector(".award").appendChild(clone); // award의 하위 자식으로 부착

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left =
  document.querySelector(".award-item-inner div").offsetWidth + "px";
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add("original");
clone.classList.add("clone");
