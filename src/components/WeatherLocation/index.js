import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN,
    WINDY
} from './../../constants/weathers';
import './styles.css';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
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

    constructor() {
        super();
        this.state = {
            city: 'CDMX',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("Actualizado!");
        this.setState({
            city: 'CDMX-DF',
            data: data2
        });
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;