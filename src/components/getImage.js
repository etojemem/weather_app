import {weatherImages} from '../assets/weatherImages';

export default function getImage(weather) {
    if (weather === 'Clouds') {
        return weatherImages.clouds;
    } else if (weather === 'Rain'){
        return weatherImages.rain;
    } else if (weather === 'Clear'){
        return weatherImages.clear;
    } else if (weather === 'Drizzle'){
        return weatherImages.drizzle;
    } else if (weather === 'Snow'){
        return weatherImages.snow;
    }
}
