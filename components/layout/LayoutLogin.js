import { Row, Col } from "antd";

export default function LayoutLogin(props) {
  return (
    <Row type="flex" justify="center" align="middle" style={Styles.layoutBody}>
      <Col span={6}>{props.children}</Col>
    </Row>
  );
}

const Styles = {
  layoutBody: { minHeight: "100vh" },
};
