import { createStore } from "vuex";

export default createStore({
  state: {
    patient: {},
    room: {},
  },
  mutations: {
    savePatient(state, patient) {
      state.patient = patient;
    },
    saveRoom(state, room) {
      state.room = room;
    },
  },
  actions: {},
  modules: {},
});
