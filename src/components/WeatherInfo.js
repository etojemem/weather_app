import styled from 'styled-components';
import { useSelector } from 'react-redux';
import getImage from './getImage'

export default function WeatherInfo() {
    const data = useSelector(state => state.weatherSlice.weather);
    const mainWeather = useSelector(state => state.weatherSlice.mainWeather);
    const img = getImage(mainWeather[0])

    return (
        <Container background={img}>
        {data?.map(city=>(
            <div key={city.id}>
                <Wrapper>
                    <CityName>{city.name}</CityName>
                    <p>{city.weather[0].description}</p>
                </Wrapper>
                <Wrapper>
                    <p>{city.weather[0].main}</p>
                    <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}/>
                </Wrapper>
                <Img src={img}/>
            </div>
        ))}
        </Container>
    );
}

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: pink;
    width: 500px;
    height: 200px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    margin-top: 10px;
    width: 500px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
`
const CityName = styled.div`
    font-size: 30px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    padding: 5px;
`

