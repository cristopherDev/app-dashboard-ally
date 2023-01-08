import { StoreProvider } from "easy-peasy";
import { Row, Col } from "antd";
import LayoutMain from "../../components/layout/LayoutMain";
import CardSelectCountry from "../../components/dashboard/CardSelectCountry";
import CardWeather from "../../components/dashboard/CardWeather";
import CardTasks from "../../components/dashboard/CardTasks";
import CardTimeZones from "../../components/dashboard/CardTimeZones";
import CardShowTime from "../../components/dashboard/CardShowTime";
import CardCountries from "../../components/dashboard/CardCountries";
import store from "../../stores/store";

export default function Home() {
  return (
    <StoreProvider store={store}>
      <LayoutMain>
        <Row gutter={16}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={12}>
                <CardSelectCountry />
              </Col>
              <Col span={12}>
                <CardWeather />
              </Col>
            </Row>

            <Row gutter={16} style={{ paddingTop: 12 }}>
              <Col span={12}>
                <CardTasks />
              </Col>
              <Col span={12}>
                <CardTimeZones />
              </Col>
            </Row>

            <Row gutter={16} style={{ paddingTop: 12 }}>
              <Col offset={12} span={12}>
                <CardShowTime />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <CardCountries />
          </Col>
        </Row>
      </LayoutMain>
    </StoreProvider>
  );
}
