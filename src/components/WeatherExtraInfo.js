import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity} %`}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>{`${wind} viento`}</span>
    </div>
);

export default WeatherExtraInfo;