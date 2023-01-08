import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Row, Col, Form, Input, Button, Typography, Modal } from "antd";

const { Title, Link } = Typography;

export default function FormCreate() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [form] = Form.useForm();
  const router = useRouter();

  const onChange = (values) => {
    const { errors, name, value } = values[0];
    const key = name[0];

    if (!errors.length) setUser((user) => ({ ...user, [key]: value }));
    if (errors.length) setUser((user) => ({ ...user, [key]: "" }));
    if (key === "password" && value !== user.password)
      setUser((user) => ({ ...user, ["confirm_password"]: "" }));
  };

  const success = (email) => {
    Modal.success({
      content: `Usuario: ${email} registrado correctamente`,
      onOk() {
        router.push("/");
      },
    });
  };

  const clearForm = () => {
    success(user.email);

    setUser({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    form.resetFields();
  };

  return (
    <Card>
      <Row>
        <Col span={6}>
          <Title level={3}>Crear Cuenta</Title>
        </Col>
      </Row>
      <Form
        form={form}
        layout="vertical"
        onFieldsChange={onChange}
        onFinish={clearForm}
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: "El nombre es necesario",
              validator: (_, val) => {
                const checkName = val.length >= 3;

                if (checkName) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(false);
                }
              },
            },
            {
              message: "Favor de ingresar un nombre real",
              validator: (_, val) => {
                const regName = new RegExp(
                  "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})"
                );
                const checkName = regName.test(val);

                if (!checkName) return Promise.reject(false);

                return Promise.resolve();
              },
            },
          ]}
        >
          <Input size="large" placeholder="Ingrese nombre completo" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "La contraseña es requerida" },
                {
                  message: "Password muy devil (menos de 8 caracteres)",
                  validator: (_, val) => {
                    const regPassword = new RegExp("^[a-zA-Z0-9]{8,30}$");
                    const checkPassword = regPassword.test(val);

                    if (!checkPassword) return Promise.reject(false);

                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Ingresa password"
                type="password"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Confirm password"
              validateStatus={
                user.confirm_password.length &&
                user.password == user.confirm_password
                  ? ""
                  : "error"
              }
              help={
                user.confirm_password.length &&
                user.password == user.confirm_password
                  ? ""
                  : "Favor de confirmar el password"
              }
            >
              <Input
                size="large"
                placeholder="Confirme Password"
                type="password"
                value={user.confirm_password}
                onChange={({ target }) => {
                  setUser((user) => ({
                    ...user,
                    confirm_password: target.value,
                  }));
                }}
                disabled={user.password ? false : true}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, type: "email", message: "El email es requerido" },
          ]}
        >
          <Input size="large" placeholder="Ingrese email" />
        </Form.Item>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          onClick={() => {}}
          disabled={
            user.name &&
            user.email &&
            user.password &&
            user.password == user.confirm_password
              ? false
              : true
          }
          loading={false}
          block
        >
          CREAR CUENTA
        </Button>
      </Form>
      <Row justify={"center"}>
        <Col style={{ paddingTop: "9px" }}>
          <Link level={2} href="/">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </Col>
      </Row>
    </Card>
  );
}
