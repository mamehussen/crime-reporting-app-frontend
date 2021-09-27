import React from 'react';
import { Link } from 'react-router-dom';

const CrimeItem = props => {
    const link = `crimes/${props.id}`

    const deleteHandler = () => {
        console.log('DELETING ...')
    }

    return(
    <div class="infobox-1">
    <div class="info-icon">
    <img src="assets/img/400x300.jpg" className="card-img-top" alt="widget-card-2" />
    </div>

    <h5 class="info-heading">{props.crimeType}</h5>
    <h6>Status: {props.status}</h6>
    <p class="info-text">{props.description}</p>
    <Link to={link}>
    <button class="btn btn-outline-primary mb-2">Edit Status</button>
    </Link>
    <button class="btn btn-outline-secondary mb-2">View Map</button>
</div>
);

}

export default CrimeItem;