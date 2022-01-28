import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function WeatherInfo() {
    const data = useSelector(state => state.weatherSlice.weather);

    return (
        <Container>
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
    background-color: #fff;
    width: 400px;
    height: 150px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const CityName = styled.div`
    font-size: 30px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    padding: 5px;
`

