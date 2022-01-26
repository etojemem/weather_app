import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchWeatherByGeolocation, setLatitude, setLongitude } from './redux/weatherSlice';
import FormSearch from './components/FormSearch';
import WeatherInfo from './components/WeatherInfo';

export default function App() {
  const dispatch = useDispatch();

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) =>{
      dispatch(setLatitude(position.coords.latitude));
      dispatch(setLongitude(position.coords.longitude));
      dispatch(fetchWeatherByGeolocation());
    })
  }

  return (
    <Container>
      <FormSearch/>
      <WeatherInfo/>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
