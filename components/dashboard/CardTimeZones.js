import { Row, Col, Card, Typography } from "antd";
import { useStoreState } from "easy-peasy";
import useTimeZones from "../../hooks/useTimeZones";

const { Link } = Typography;

export default function CardTimeZones() {
  const country = useStoreState((state) => state.country);

  const [timeZones] = useTimeZones();

  return (
    <Card title="Zonas horarias disponibles" bordered={false}>
      {timeZones[country].map((time) => (
        <p><Link>{time}</Link></p>
      ))}
    </Card>
  );
}
