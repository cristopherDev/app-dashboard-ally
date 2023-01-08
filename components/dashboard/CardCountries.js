import { Row, Col, Card, Avatar, Typography, Space } from "antd";
import { useStoreActions } from "easy-peasy";

const { Text } = Typography;

export default function CardCountries() {
  const setCountry = useStoreActions((action) => action.setCountry);

  return (
    <Card title="PAISES DISPONIBLES" bordered={false}>
      <Row>
        <Col span={24}>
          <Space>
            <Avatar size={100} src={"/imgs/mx.svg"} />
            <Text
              style={Styles.linkCountry}
              onClick={() => {
                setCountry("mexico");
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
                setCountry("australia");
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
                setCountry("colombia");
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
