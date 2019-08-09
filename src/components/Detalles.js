import React from 'react';
import Temperatura from './Temperatura';
import Humedad from './Humedad';

function Detalles(props){
    return (
        <div className="Detalles">
            <Temperatura datos={props.datos.temperatura}></Temperatura>
            <Humedad datos={props.datos.humedad}></Humedad>
        </div>
    )
}

export default Detalles;