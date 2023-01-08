import { createStore, action } from "easy-peasy";

const store = createStore({
  user: {
    email: "",
    password: "",
  },
  loading: false,
  country: 'mexico',

  setStateUser: action((state, action) => {
    const { key, value } = action;
    state.user = { ...state.user, [key]: value };
  }),

  setCountry: action((state, action) => {
    state.country = action;
  })
});

export default store;
