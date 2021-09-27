import React from 'react';
import CrimeItem from './CrimeItem';

const CrimesList = props => {
    return (
        
<div className="row">
        {props.items.map(crime => <CrimeItem 
        key={crime._id} 
        id={crime._id} 
        crimeType={crime.crimeType} 
        status={crime.status}
        description={crime.description}
        createdBy={crime.createdby}
        />)}
     
</div>

    );
}

export default CrimesList;