import { createStore, action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  user: {
    email: "",
    password: "",
  },
  loading: false,
  country: 'mexico',
  time_zone: 'America/Mexico_City',
  time: '',

  setStateUser: action((state, action) => {
    const { key, value } = action;
    state.user = { ...state.user, [key]: value };
  }),

  setCountry: action((state, action) => {
    state.country = action;
  }),

  setTimeZone: action((state, action) => {
    state.time_zone = action;
  }),

  setTime: action((state, action) => {
    state.time = action;
  }),

  fetchTimeZone: thunk(async(actions, payload) => {
    const { zone, token } = payload
    const fetch = await axios.post("/api/timezone", { zone, token });
    actions.setTime(fetch.data.time)
  })
});

export default store;
