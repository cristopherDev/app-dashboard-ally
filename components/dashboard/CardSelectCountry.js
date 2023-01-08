import { Row, Col, Card, Typography } from "antd";
import { useStoreState } from "easy-peasy";

const { Text } = Typography

export default function CardSelectCountry() {
  const country = useStoreState((state) => state.country);
  const weather = useStoreState((state) => state.weather);

  console.log(weather)

  const countrySelect = {
    mexico: 'México',
    australia: 'Australia',
    colombia: 'Colombia'
  }

  return (
    <Card title="PAIS SELECCIONADO" bordered={false}>
      
      <Text style={{ fontSize: 18 }} >{countrySelect[country]}</Text>
      {
        Object.keys(weather).length ?
        <>
          <br/>
          <Text style={{ fontSize: 18 }} >Capital: {weather.location.region}</Text>
          <br/>
          <Text style={{ fontSize: 18 }} >Region: {weather.location.region}</Text>
          <br/>
          <Text style={{ fontSize: 18 }} >Latitud: {weather.location.lat} Longitud: {weather.location.lon}</Text>
        </>
        :
        null
      }
      

    </Card>
  );
}
