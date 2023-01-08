import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout, Menu, Typography } from 'antd';
import dayjs from 'dayjs';

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

const LayoutMain = (props) => {
    const router = useRouter();

    useEffect(() => {
        let check = sessionStorage.getItem('checkUser');

        if (!check) {
            router.push('/');
        }
    }, []);

    return (
        <Layout style={ Styles.layoutBody }>
            <Layout>
                <Sider width={200}>
                    <Menu 
                        mode="inline" 
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="0">
                            <Title level={5}>Dashboard</Title>
                        </Menu.Item>
                        <Menu.Item key="1">
                        Principal
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={ Styles.contentBody }>
                        { props.children }
                    </Content>
                    <Footer style={ Styles.footerText }>
                        Dashboard {dayjs().format('YYYY')} / Demo.
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

const Styles = {
    layoutBody: { minHeight: '100vh' },
    contentBody: { padding: '30px 30px' },
    footerText: { textAlign: 'center' }
}

export default LayoutMain;