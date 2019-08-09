import React from 'react';
import { WiDaySunny } from "weather-icons-react";

function Temperatura(props){
    return (
        <div className="Temperatura">
            <h1><WiDaySunny size={24} color='#2f2f2f' />Temperatura: {props.datos}</h1>
        </div>
    )
}

export default Temperatura;