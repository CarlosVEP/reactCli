import React from 'react';
import Detalles from './Detalles';

function Location(props){
    return (
        <div className="Location">
            <h1>Cochabamba</h1>
            <Detalles datos={props.datos}></Detalles>
        </div>
    )
}

export default Location;