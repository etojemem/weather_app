import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherByGeolocation, setLatitude, setLongitude } from './redux/weatherSlice';
import FormSearch from './components/FormSearch';
import WeatherInfo from './components/WeatherInfo';
import getImage from './components/getImage';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const mainWeather = useSelector(state => state.weatherSlice.mainWeather);
  const img = getImage(mainWeather[0]);

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
        dispatch(setLatitude(position.coords.latitude));
        dispatch(setLongitude(position.coords.longitude));
        dispatch(fetchWeatherByGeolocation());
      })
    }
  }, []);
  
  return (
    <Container style={{backgroundImage:`url(${img})`}}>
      <FormSearch/>
      <WeatherInfo/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
`
