$(document).ready(function () {
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
});
