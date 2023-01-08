import { createStore, action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  user: {
    email: "",
    password: "",
  },
  loading: false,
  country: "mexico",
  time_zone: "America/Mexico_City",
  time: "",
  weather: {},
  menu: '1',

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

  setWeather: action((state, action) => {
    state.weather = action;
  }),

  setMenu: action((state, action) => {
    state.menu = action;
  }),

  fetchTimeZone: thunk(async (actions, payload) => {
    const { zone, token } = payload;
    const fetch = await axios.post("/api/timezone", { zone, token });
    actions.setTime(fetch.data.time);
  }),

  fetchWeather: thunk(async (actions, payload) => {
    const { country, token } = payload;
    const fetch = await axios.post("/api/weather", { country, token });
    actions.setWeather(fetch.data);
  }),
});

export default store;
