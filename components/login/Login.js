import { useRouter } from "next/router";
import { useEffect } from "react";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { useStoreState, useStoreActions } from "easy-peasy";

const { Title, Link } = Typography;

const Login = () => {
  const user = useStoreState((state) => state.user);
  const loading = useStoreState((state) => state.loading);

  const setStateUser = useStoreActions((action) => action.setStateUser);
  //const loginUser = useStoreActions((action) => action.loginUser);

  const router = useRouter();

  useEffect(() => {
    if (user.loged) {
      router.push("/main");
    }
  });

  const [form] = Form.useForm();

  return (
    <Card>
      <Row>
        <Col span={6}>
          <Title level={3}>Login</Title>
        </Col>
      </Row>
      <Form form={form} layout="vertical" >
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "El email no es valido" }]}>
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="Correo"
            value={user.email}
            onChange={({ target }) =>
              setStateUser({ key: "email", value: target.value })
            }
          />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: "La contraseña es requerida" }]} >
          <Input
            size="large"
            prefix={<UnlockOutlined />}
            placeholder="Contraseña"
            type="password"
            value={user.password}
            onChange={({ target }) =>
              setStateUser({ key: "password", value: target.value })
            }
          />
        </Form.Item>
        <Button
          size="large"
          type="primary"
          onClick={() => {}}
          disabled={user.email && user.password ? false : true}
          loading={loading}
          block
        >
          LOGIN
        </Button>
      </Form>
      <Row justify={"center"}>
        <Col style={{ paddingTop: "9px" }}>
          <Link level={2} href="/user/create">¿Necesitas una cuenta? ¡Registrate!</Link>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
