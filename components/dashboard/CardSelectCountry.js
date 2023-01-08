import { Row, Col, Card, Typography } from "antd";
import { useStoreState } from "easy-peasy";

const { Text } = Typography

export default function CardSelectCountry() {
  const country = useStoreState((state) => state.country);

  const countrySelect = {
    mexico: 'México',
    australia: 'Australia',
    colombia: 'Colombia'
  }

  return (
    <Card title="PAIS SELECCIONADO" bordered={false}>
      
      <Text style={{ fontSize: 18 }} >{countrySelect[country]}</Text>
    </Card>
  );
}
