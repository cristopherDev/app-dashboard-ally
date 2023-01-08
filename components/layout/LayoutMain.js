import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout, Menu, Typography } from "antd";
import dayjs from "dayjs";

const { Content, Header, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const LayoutMain = (props) => {
  const router = useRouter();

  useEffect(() => {
        const auth = sessionStorage.getItem('auth');
        const email = sessionStorage.getItem('email');
        const token = sessionStorage.getItem('token');

        if (!auth && !email && !token) {
            router.push('/');
        }
    }, []);

  return (
    <Layout style={Styles.layoutBody}>
      <Layout>
        <Sider width={200}>
          <Menu defaultSelectedKeys={['1']} mode="inline" style={{ height: "100%", borderRight: 0 }}>
            <Menu.Item key="0">
              <Title level={5}>Dashboard</Title>
            </Menu.Item>
            <Menu.Item key="1">Weather</Menu.Item>
            <Menu.Item key="2">Usuarios</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: '#fff',
            }}
          />
          <Content style={Styles.contentBody}>{props.children}</Content>
          <Footer style={Styles.footerText}>
            <Text>Dashboard {dayjs().format("YYYY")} / Demo.</Text>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

const Styles = {
  layoutBody: { minHeight: "100vh" },
  contentBody: { padding: "30px 30px", backgroundColor: "#0174DF" },
  footerText: { textAlign: "center", backgroundColor: "#0174DF" },
};

export default LayoutMain;
