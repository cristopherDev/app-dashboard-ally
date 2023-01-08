import { Row, Col, Card } from "antd";
import { useStoreState } from "easy-peasy";

export default function CardWeather() {
  const weather = useStoreState((state) => state.weather);

  return (
    <Card title="CLIMA" bordered={false}>
      <Row gutter={16}>
        <Col span={4}>
        {Object.keys(weather).length ? (
            <>
              <img src={`https:${weather.current.condition.icon}`} />
            </>
          ) : null}
          
        </Col>
        <Col span={20}>
          {Object.keys(weather).length ? (
            <>
              <p>{weather.current.feelslike_c}° C</p>
              <p>{weather.current.condition.text}</p>
            </>
          ) : null}
        </Col>
      </Row>
    </Card>
  );
}
