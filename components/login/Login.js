import { useRouter } from "next/router";
import { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";

const { Title, Link } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false)

  const user = useStoreState((state) => state.user);
  const setStateUser = useStoreActions((action) => action.setStateUser);

  const router = useRouter();

  const authUser = async (page) => {
    try {
      setLoading(true)
      const fetchAuth = await axios.post('/api/auth', user)

      const { data } = fetchAuth
      
      sessionStorage.setItem('email', user.email)
      sessionStorage.setItem('id', data.id)
      sessionStorage.setItem('auth', data.auth)
      sessionStorage.setItem('token', data.token)

      setLoading(false)

      router.push('/dashboard')
    } catch (error) {
      message.open({
        type: 'error',
        content: 'El usuario no existe o la contraseña es incorrecta',
      });
      console.log(error)
      setLoading(false)
    }
  }

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
          onClick={() => { authUser() }}
          disabled={user.email && user.password && !loading ? false : true}
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
