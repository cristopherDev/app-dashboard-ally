import { createStore, action } from "easy-peasy";

const store = createStore({
  user: {
    email: "",
    password: "",
  },
  loading: false,

  setStateUser: action((state, action) => {
    const { key, value } = action;
    state.user = { ...state.user, [key]: value };
  }),
});

export default store;
