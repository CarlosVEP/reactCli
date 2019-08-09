import React from 'react';

function Humedad(props){
    return (
        <div className="Humedad">
            <h1>Humedad: {props.datos.humedad}</h1>
            <h1>Tiempo: {props.datos.tiempo}</h1>
        </div>
    )
}

export default Humedad;