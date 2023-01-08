import { useEffect, useState } from "react";
import { Row, Col, Card, Typography, List, Button, Input } from "antd";
import axios from "axios";

const { Text } = Typography;

function CardTasks() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [showNewTask, setShowNewTask] = useState(false);
  const getTasks = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const id = sessionStorage.getItem("id");

      const fetchTasks = await axios.post("/api/tasks", { id, token });

      setTasks(fetchTasks.data);

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  async function AddNewTask() {
    try {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("id");

      await axios.post("/api/newtask", { userId, task, token });

      await getTasks()

      setTask('')
      setShowNewTask(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function updateTask(id, status) {
    try {
      const token = sessionStorage.getItem("token");

      await axios.post("/api/updatetask", { id, status, token });

      await getTasks()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Card title="Otras tareas" bordered={false}>
      <Button
        type="primary"
        onClick={() => {
          setShowNewTask(!showNewTask);
        }}
      >
        {showNewTask ? "Cancelar" : "Nueva tarea"}
      </Button>
      {showNewTask ? (
        <>
          <Card>
            <Input
              placeholder="Nueva tarea..."
              value={task}
              onChange={({ target }) => {
                setTask(target.value);
              }}
            />
            <br />
            <br />
            <Button type="primary" disabled={task.length ? false : true} onClick={() => {AddNewTask()}}>
              GUARDAR
            </Button>
          </Card>
        </>
      ) : null}
      <br />
      <br />
      {tasks.length ? (
        <List
          bordered
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <Text>
                {task.task} - {task.done ? "terminada" : "pendiente"}
              </Text>
              <Button type="primary" onClick={() => {updateTask(task.id, !task.done)}}>{task.done ? "PENDIENTE" : "TERMINAR"}</Button>
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
