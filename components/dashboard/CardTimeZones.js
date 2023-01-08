import { Row, Col, Card, Typography } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";
import useTimeZones from "../../hooks/useTimeZones";

const { Link } = Typography;

export default function CardTimeZones() {
  const country = useStoreState((state) => state.country);

  const setTimeZone = useStoreActions((action) => action.setTimeZone);
  const fetchTimeZone = useStoreActions((action) => action.fetchTimeZone);

  const [timeZones] = useTimeZones();

  const updateTimeZone = async (val) => {
    const token = sessionStorage.getItem("token");

    setTimeZone(val)

    await fetchTimeZone({ zone: val, token });
  }

  return (
    <Card title="Zonas horarias disponibles" bordered={false}>
      {country && timeZones[country].length
        ? timeZones[country].map((time, index) => (
            <p key={index}>
              <Link style={{ fontSize: 16 }} onClick={() => { updateTimeZone(time) }}>{time}</Link>
            </p>
          ))
        : null}
    </Card>
  );
}
