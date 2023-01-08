import { StoreProvider } from "easy-peasy";
import LayoutLogin from "../components/layout/LayoutLogin";
import Login from "../components/login/Login";
import store from "../stores/store";

export default function Home() {
  return (
    <StoreProvider store={store}>
      <LayoutLogin>
        <Login />
      </LayoutLogin>
    </StoreProvider>
  );
}
