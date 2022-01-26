import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (_,{getState}) => {
        const _apiKey = process.env.REACT_APP_API_KEY;
        const {weatherSlice} = getState();
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${weatherSlice.searchValue}&appid=${_apiKey}`)
            .then(res => res.data)
            .catch(err => console.error(err));
        return res;
    }
)
export const fetchWeatherByGeolocation = createAsyncThunk(
    'weather/fetchWeatherByGeolocation',
    async (_,{getState}) => {
        const _apiKey = process.env.REACT_APP_API_KEY;
        const {weatherSlice} = getState();
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${weatherSlice.latitude}&lon=${weatherSlice.longitude}&appid=${_apiKey}`)
            .then(res => res.data)
            .catch(err => console.error(err));
        return res;
    }
)


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        searchValue : '',
        latitude: '',
        longitude: '',
        mainWeather: '',
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setLatitude(state, action){
            state.latitude = action.payload;
        },
        setLongitude(state, action){
            state.longitude = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = [action.payload];
            state.mainWeather = [action.payload.weather[0].main];
        })
        builder.addCase(fetchWeatherByGeolocation.fulfilled, (state, action) => {
            state.weather = [action.payload];
            state.mainWeather = [action.payload.weather[0].main];
        })
    },
});

export const { setSearchValue, setStatus, setLatitude, setLongitude } = weatherSlice.actions;

export default weatherSlice.reducer;
