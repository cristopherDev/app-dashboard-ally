import { useEffect, useState } from 'react'
import { Row, Col, Card, Typography } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";

const { Text } = Typography

export default function CardShowTime() {
  const timeZoneSelected = useStoreState((state) => state.time_zone);
  const time = useStoreState((state) => state.time);

  const fetchTimeZone = useStoreActions((action) => action.fetchTimeZone);

  const getTimeZone = async () => {
    try {
      const token = sessionStorage.getItem("token");

      await fetchTimeZone({ zone: timeZoneSelected, token });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTimeZone();
  }, []);

  return (
    <Card title="Hora" bordered={false}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{time}</Text>
      <br/>
      <Text style={{ fontSize: 16 }}>{timeZoneSelected}</Text>
    </Card>
  );
}
