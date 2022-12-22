import { createStore } from 'vuex';

export default createStore({
  state: {
    itemDetail: null,
    currentDrawer: null
  },
  getters: {
  },
  mutations: {
    setItemDetail (state, data) {
      state.itemDetail = data.item;
      state.currentDrawer = data.drawer;
    },
    clearItemDetail (state) {
      state.itemDetail = null;
      state.currentDrawer = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
