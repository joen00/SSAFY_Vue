// BookView.js
export default {
  template: `
    <div class="regist">
        <h1 class="underline">SSAFY 도서 정보</h1>
        <div class="regist_form" v-if="book">
            <label for="isbn">도서번호</label>
            <div class="view">{{book.isbn}}</div>
            <label for="title">도서명</label>
            <div class="view">{{book.title}}</div>
            <label for="author">저자</label>
            <div class="view">{{book.author}}</div>
            <label for="price">가격</label>
            <div class="view">{{book.price}}원</div>
            <label for="content">설명</label>
            <div class="view" v-html="book.content"></div>
            <div style="padding-top: 15px">
                <a :href="'./modify.html?isbn=' + book.isbn" class="btn">수정</a>
                <a :href="'./delete.html?isbn=' + book.isbn" class="btn">삭제</a>
                <a href="./list.html" class="btn">목록</a>
            </div>
        </div>
    </div>
    `,
  data: function () {
    return {
      book: {},
    };
  },
  //   props: ["money"], // 이건 부모가 나한테 isbn 주던 시절
  props: ["cup"], // 이제 웬 종이컵 전화기가 오네?
  created() {
    // created시점에 on해서 예약 걸어둠
    // 미리 대기하고 있자. 누가 이 종이컵에 hey라고 하면 내 yes 함수 실행해야지!
    this.cup.$on("hey", this.yes);
  },
  //   watch: {
  //     money() {
  //       console.log("Bookview 인 자식이 부모가 준 money를 받음" + this.money);
  //       // url에서 파라미터정보 얻기.
  //       // const params = new URL(document.location).searchParams;

  //       // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
  //       const booklist = JSON.parse(localStorage.getItem("booklist"));
  //       for (let obj of booklist.books) {
  //         // 보여줄 isbn을 찾았다면.
  //         if (this.money == obj.isbn) { // 부모가 용돈으로 보낸 데이터 찾기
  //           // 전역변수 book에 화면에 보여줄 객체를 저장.
  //           this.book = obj;
  //           break;
  //         }
  //       }
  //     },
  //   },
  methods: {
    yes(receive) {
      // 데이터를 받음
      console.log("cup에 누가 hey 라고 하면서 보낸 데이터" + receive);

      const booklist = JSON.parse(localStorage.getItem("booklist"));
      for (let obj of booklist.books) {
        // 보여줄 isbn을 찾았다면.
        if (receive == obj.isbn) {
          // 형제가 종이컵에 보낸 데이터 찾기
          // 전역변수 book에 화면에 보여줄 객체를 저장.
          this.book = obj;
          break;
        }
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      // 문자열에 enter값을 <br />로 변경.(html상에서 줄바꿈 처리)
      return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
  },
};
