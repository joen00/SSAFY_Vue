import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
    blogList: [],
    shopList: [],
  },
  getters: {
    // 굳이 state에 데이터 중복해서 저장할 필요는 없는데 가공된 데이터를
    // 필요로 하는 컴포넌트들한테 제공하고 싶은 경우
    // 창고에서 저장된 데이터를 가공해서 보내주는 것 (state = 창고)에 있는 것을 만질수있음
    top3Items(state) {
      // state에 있는거 토대로 필터링함
      return state.shopList
        .sort((a, b) => {
          return a.lprice - b.lprice;
        })
        .slice(0, 3); // 0 1 2까지 0부터 3개 뽑아라
    },
  },
  mutations: {
    // state 접근 권한이 있어서 state가 첫번째 인자값
    // 전부 대문자로 action이랑 구분
    SEARCH_NAVER_SHOP(state, payload) {
      state.shopList = payload;
    },
  },
  actions: {
    // 비동기 백엔드랑 통신하는 비동기 처리는 얘가 다함
    // 백엔드와 통신을 하는 것 -> mutation을 거치고 -> 넣는다.
    // 두번쨰 인자값으로 뭔가 올때 쓰는 것 payload
    searchNavershop({ commit }, payload) {
      http.get("naver/shop?keyword=" + payload).then(({ data }) => {
        // data 만 뽑아줘 ex6문법 {} 안에 넣음
        console.log(data); // 백엔드에서 데이터 받았어! 직접 state에 넣지 말랬으니까!
        commit("SEARCH_NAVER_SHOP", data.items); // SEARCH_NAVER_SHOP에 data.items를 준다. state에 넣어줘 , 기록도 해줘
      });
      // .then((data) => console.log(data));
    },
  },
  modules: {},
});
