import React from 'react';
import PropTypes from 'prop-types';


const Cite = ({cite, deleteCite}) => ( 
    <div className="cita">
        <p>Pet: <span>{cite.pet}</span> </p>
        <p>Owner: <span>{cite.owner}</span> </p>
        <p>Date: <span>{cite.date}</span> </p>
        <p>Time: <span>{cite.time}</span> </p>
        <p>Symptoms: <span>{cite.symptoms}</span> </p>

        <button
            className="btn btn-primary"
            onClick={() => deleteCite(cite.id)}
        >Eliminar &times;</button>
    </div>
);

 
export default Cite;