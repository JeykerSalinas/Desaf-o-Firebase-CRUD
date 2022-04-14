import Vue from "vue";
import Vuex from "vuex";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/helpers/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myData: [],
  },
  getters: {},
  mutations: {
    SET_DATA(state, payload) {
      state.myData.push({ ...payload.data(), id: payload.id });
    },
    DELETE_USER(state, payload) {
      state.myData = state.myData.filter((item) => item.id !== payload.id);
    },
    ADD_USER(state, payload) {
      state.myData.push(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        commit("SET_DATA", doc);
      });
    },
    async deleteSome({ commit }, payload) {
      await deleteDoc(doc(db, "usuarios", payload.id));
      console.log(payload);
      commit("DELETE_USER", payload);
    },
    async addSome({ commit }, payload) {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), payload);
        console.log("Document written with ID: ", docRef.id);
        commit("ADD_USER", { ...payload, id: docRef.id });
      } catch (error) {
        console.log(error);
      }
    },
    async setSome({ commit }, payload) {
      await setDoc(doc(db, "usuarios", payload.id), {
        age: payload.age,
        name: payload.name,
        email: payload.email,
      });
      commit("DELETE_USER", payload);
      commit("ADD_USER", payload);
      console.log("seted");
    },
  },

  modules: {},
});
