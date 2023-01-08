import { Row, Col } from "antd";

export default function LayouNewUser(props) {
  return (
    <Row type="flex" justify="center" align="middle" style={Styles.layoutBody}>
      <Col span={10}>{props.children}</Col>
    </Row>
  );
}

const Styles = {
  layoutBody: { minHeight: "100vh" },
};
