import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN
} from './../../constants/weathers';
import './styles.css';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

//COMPONENTE FUNCIONAL
/*const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"CDMX"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);*/

//COMPONENTE CLASE
class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={"CDMX"}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
};

export default WeatherLocation;