import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
let modules = {
	state: {},
	mutations: {},
	actions: {}
};

// 将./modules下所有的export的state、mutations、actions放入let modules中
files.keys().forEach((key) => {
  Object.assign(modules.state, files(key)["state"]);
  Object.assign(modules.mutations, files(key)["mutations"]);
  Object.assign(modules.actions, files(key)["actions"]);
});
const store = new Vuex.Store(modules);
export default store;

