import { useEffect } from 'react'
import { Row, Col, Card, Avatar, Typography, Space } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";

const { Text } = Typography;

const countries = {
  mexico: 'Mexico',
  colombia: 'Colombia',
  australia: 'Australia'
}

export default function CardCountries() {
  const country = useStoreState((state) => state.country);

  const setCountry = useStoreActions((action) => action.setCountry);
  const fetchWeather = useStoreActions((action) => action.fetchWeather);

  const getWeatherCountry = async() => {
    const token = sessionStorage.getItem("token");

    await fetchWeather({country: countries[country], token})
  }

  async function updateWeather(country) {
    setCountry(country)

    const token = sessionStorage.getItem("token");

    await fetchWeather({country: countries[country], token})
  }

  useEffect(() => { getWeatherCountry() }, [])

  return (
    <Card title="PAISES DISPONIBLES" bordered={false}>
      <Row>
        <Col span={24}>
          <Space>
            <Avatar size={100} src={"/imgs/mx.svg"} />
            <Text
              style={Styles.linkCountry}
              onClick={() => {
                updateWeather("mexico");
              }}
            >
              México
            </Text>
          </Space>
        </Col>

        <Col span={24} style={Styles.costumCol}>
          <Space>
            <Avatar size={100} src={"/imgs/au.svg"} />
            <Text
              style={Styles.linkCountry}
              onClick={() => {
                updateWeather("australia");
              }}
            >
              Australia
            </Text>
          </Space>
        </Col>

        <Col span={24} style={Styles.costumCol}>
          <Space>
            <Avatar size={100} src={"/imgs/co.svg"} />
            <Text
              style={Styles.linkCountry}
              onClick={() => {
                updateWeather("colombia");
              }}
            >
              Colombia
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

const Styles = {
  costumCol: { paddingTop: 24 },
  linkCountry: { fontSize: 26, cursor: "pointer" },
};
