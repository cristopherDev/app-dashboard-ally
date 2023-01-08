import { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Table } from "antd";
import axios from "axios";
import moment from "moment";

const { Text } = Typography;

function CardUsers() {
  const [listUsers, setListUsers] = useState([]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Fecha Registro",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (fecha) => moment(fecha).format('YYYY-MM-DD HH:mm:ss a')
    },
    {
      title: "Ultimo login",
      dataIndex: "last_login",
      key: "last_login",
      render: (fecha) => moment(fecha).format('YYYY-MM-DD HH:mm:ss a')
    },
  ];

  async function getListUsers() {
    const token = sessionStorage.getItem("token");

    const fetch = await axios.post("/api/users", { token });

    setListUsers(fetch.data.users)
  }

  useEffect(() => {
    getListUsers()
  }, [])

  return (
    <Card title="Usuarios" bordered={false}>
      <Table dataSource={listUsers} columns={columns} />
    </Card>
  );
}

export default CardUsers;
