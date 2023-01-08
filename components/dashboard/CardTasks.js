import { useEffect, useState } from "react";
import { Row, Col, Card, Typography, List } from "antd";
import axios from "axios";

const { Text } = Typography;

function CardTasks() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const id = sessionStorage.getItem("id");

      const fetchTasks = await axios.post("/api/tasks", { id, token });

      setTasks(fetchTasks.data);

      return true
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Card title="Otras tareas" bordered={false}>
      {tasks.length ? (
        <List
          bordered
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <Text>{task.task}</Text>
            </List.Item>
          )}
        />
      ) : (
        <Text style={{ fontSize: 16 }}>Sin tareas</Text>
      )}
    </Card>
  );
}

export default CardTasks;
