$(document).ready(function () {
  $(window).resize(function () {
    let widthSizing = $(window).width();
    if (widthSizing > 1199) {
      // 피씨 버전
      $(".tablet-gnb-menu-list").slideUp(10);
      /* 메인 슬라이드-피씨버전 */
      for (let i = 0; i < 4; i++) {
        $(".slide-item a")
          .eq(i)
          .children("img")
          .attr("src", "/images/main-slide/pc-slide_0" + (i + 1) + ".jpg");
      }

      $(".best-menu-item").css("width", "23%");
      $(".best-menu-item img").css("width", "100%");
    } else if (widthSizing > 768) {
      // 태블릿 버전
      $(".gnb-pc-sub-menu").slideUp(10);
      $(".gnb-pc-main-menu li a").removeClass("on");

      /* 메인 슬라이드-피씨버전 */
      for (let i = 0; i < 4; i++) {
        $(".slide-item a")
          .eq(i)
          .children("img")
          .attr("src", "/images/main-slide/pc-slide_0" + (i + 1) + ".jpg");
      }
      $(".best-menu-item").css("width", "48%");
      $(".best-menu-item img").css("width", "100%");
    } else if (widthSizing < 768) {
      // 모바일 버전
      $(".tablet-gnb-menu-list").slideUp(10);

      /* 메인 슬라이드-모바일버전 */
      for (let i = 0; i < 4; i++) {
        $(".slide-item a")
          .eq(i)
          .children("img")
          .attr("src", "/images/main-slide/moblie_slide_0" + (i + 1) + ".jpg");
      }

      /* 베스트메뉴 슬라이드-모바일버전 */
      $(".best-menu-item").css("width", widthSizing - 40);
      $(".best-menu-item img").css("width", widthSizing - 60);
      let i = 0;
      function slideLeft() {
        if (i >= 3) {
          i = 0;
        } else {
          i++;
        }
        $(".best-menu-item-inner").animate(
          { left: -i * (widthSizing - 40) },
          300
        );
      }
      setInterval(slideLeft, 4000);
    }
  });

  /* aside */
  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop < 180) {
      scrollTop = 180;
    }
    $("aside").stop();
    $("aside").animate({ top: scrollTop + 100 });
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

  /* 창업상담 시군구 select */
  let locations = {
    1: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    2: [
      "계양구",
      "남구",
      "남동구",
      "동구",
      "부평구",
      "서구",
      "연수구",
      "중구",
      "강화군",
      "옹진군",
    ],
    3: ["대덕구", "동구", "서구", "유성구", "중구"],
    4: ["광산구", "남구", "동구", "북구", "서구"],
    5: ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
    6: ["남구", "동구", "북구", "중구", "울주군"],
    7: [
      "강서구",
      "금정구",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
      "기장군",
    ],
    8: [
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
      "가평군",
      "양평군",
      "여주군",
      "연천군",
    ],
    9: [
      "강릉시",
      "동해시",
      "삼척시",
      "속초시",
      "원주시",
      "춘천시",
      "태백시",
      "고성군",
      "양구군",
      "양양군",
      "영월군",
      "인제군",
      "정선군",
      "철원군",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],
    10: [
      "제천시",
      "청주시",
      "충주시",
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "증평군",
      "진천군",
      "청원군",
    ],
    11: [
      "계룡시",
      "공주시",
      "논산시",
      "보령시",
      "서산시",
      "아산시",
      "천안시",
      "금산군",
      "당진군",
      "부여군",
      "서천군",
      "연기군",
      "예산군",
      "청양군",
      "태안군",
      "홍성군",
    ],
    12: [
      "군산시",
      "김제시",
      "남원시",
      "익산시",
      "전주시",
      "정읍시",
      "고창군",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "임실군",
      "장수군",
      "진안군",
    ],
    13: [
      "광양시",
      "나주시",
      "목포시",
      "순천시",
      "여수시",
      "강진군",
      "고흥군",
      "곡성군",
      "구례군",
      "담양군",
      "무안군",
      "보성군",
      "신안군",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],
    14: [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "문경시",
      "상주시",
      "안동시",
      "영주시",
      "영천시",
      "포항시",
      "고령군",
      "군위군",
      "봉화군",
      "성주군",
      "영덕군",
      "영양군",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
    ],
    15: [
      "거제시",
      "김해시",
      "마산시",
      "밀양시",
      "사천시",
      "양산시",
      "진주시",
      "진해시",
      "창원시",
      "통영시",
      "거창군",
      "고성군",
      "남해군",
      "산청군",
      "의령군",
      "창녕군",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
    16: ["서귀포시", "제주시", "남제주군", "북제주군"],
  };

  function selectLocation() {
    let selectSido = $("#sido option").index($("#sido option:selected"));
    $("#gugun").empty(); // 구/군을 초기화
    $("#gugun").append("<option value='구/군 선택'>구/군 선택</option>");

    for (var key in locations) {
      //for ~ in 을 사용해서 locations객체의 키 값을 하나씩 가져옴
      if (key == selectSido) {
        //key값이 선택한 시/도와 같으면 다음 실행
        let locationsLength = locations[selectSido].length;
        for (let i = 0; i < locationsLength; i++) {
          $("#gugun").append(
            "<option value='" +
              i +
              "'>" +
              locations[selectSido][i] +
              "</option>"
          );
        }
      }
    }
  }

  $("#sido").on("change", selectLocation);
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
