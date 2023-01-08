import { StoreProvider } from "easy-peasy";
import { Row, Col } from "antd";
import LayoutMain from "../../components/layout/LayoutMain";
import store from "../../stores/store";
import CardUsers from "../../components/dashboard/CardUsers";

export default function Home() {
  return (
    <StoreProvider store={store}>
      <LayoutMain>
        <Row gutter={16}>
          <Col span={24}>
            <CardUsers />
          </Col>
        </Row>
      </LayoutMain>
    </StoreProvider>
  );
}
